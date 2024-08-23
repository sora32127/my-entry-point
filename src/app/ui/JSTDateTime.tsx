export default function JSTDateTime({ date }: { date: string }) {
    const formatTime = (timestamp: string) => {
        const date = new Date(timestamp);
        return date.toLocaleString("ja-JP", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23",
        }).replace(/\//g, "-");
    }
    const dateObj = formatTime(date);

    return dateObj;
}