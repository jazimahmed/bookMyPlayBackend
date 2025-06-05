import axios from "axios";

export async function sendOtpSms(phone: string, otp: string): Promise<void> {
  const userId = process.env.NOTIFY_USER_ID;
  const apiKey = process.env.NOTIFY_API_KEY;
  const senderId = process.env.NOTIFY_SENDER_ID;
  const message = `Your OTP is ${otp}`;

  const url = `https://app.notify.lk/api/v1/send?user_id=${userId}&api_key=${apiKey}&sender_id=${senderId}&to=${phone}&message=${encodeURIComponent(message)}`;

  try {
    const res = await axios.get(url);
    if (res.data.status !== "success") {
      console.error("Failed to send OTP SMS:", res.data);
    }
  } catch (err) {
    console.error("Notify.lk Error:", err);
  }
}
