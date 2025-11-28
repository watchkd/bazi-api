export default function handler(req, res) {
  const query = req.query || {};
  const { year, month, day, hour } = query;

  const params = {
    year: typeof year === 'string' ? year.trim() : String(year),
    month: typeof month === 'string' ? month.trim() : String(month),
    day: typeof day === 'string' ? day.trim() : String(day),
    hour: typeof hour === 'string' ? hour.trim() : String(hour),
  };

  if (!params.year || !params.month || !params.day || !params.hour) {
    return res.status(400).json({
      error: '请提供 year, month, day, hour 参数（不能为空）'
    });
  }

  // ✅ 强制设置 Content-Type 为 application/json
  res.setHeader('Content-Type', 'application/json');

  res.status(200).json({
    message: "恭喜！API 已成功运行！",
    input: params
  });
}