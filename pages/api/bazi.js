export default function handler(req, res) {
  const { year, month, day, hour } = req.query;
  if (!year || !month || !day || !hour) {
    return res.status(400).json({ error: '请提供 year, month, day, hour 参数' });
  }
  res.status(200).json({
    message: "恭喜！API 已成功运行！",
    input: { year, month, day, hour }
  });
}