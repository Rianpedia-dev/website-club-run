import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { message, sessionId } = await req.json()

    const webhookUrl = process.env.N8N_WEBHOOK_URL
    if (!webhookUrl) {
      return NextResponse.json({ error: "N8N_WEBHOOK_URL belum dikonfigurasi." }, { status: 500 })
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chatInput: message, sessionId: sessionId }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("n8n webhook error:", errorText)
      if (response.status === 404) {
        return NextResponse.json(
          { error: "Alur kerja chatbot tampaknya tidak aktif. Silakan aktifkan alur kerja di n8n editor Anda." },
          { status: 404 },
        )
      }
      return NextResponse.json({ error: "Gagal mendapatkan balasan dari chatbot." }, { status: response.status })
    }

    const data = await response.json()
    console.log("Full response from n8n:", JSON.stringify(data, null, 2))

    const botResponse = data?.output

    if (!botResponse) {
      console.error("n8n response did not contain an 'output' field.", data)
      return NextResponse.json(
        { error: "Menerima format balasan tak terduga dari chatbot. Periksa log eksekusi n8n untuk detailnya." },
        { status: 500 },
      )
    }

    return NextResponse.json({ reply: botResponse })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Terjadi kesalahan internal pada server." }, { status: 500 })
  }
}
