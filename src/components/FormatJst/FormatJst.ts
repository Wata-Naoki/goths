import { format, parseISO } from "date-fns";

/**
 * ISO8601形式の日時文字列を引数に取り、日本語形式の日時文字列を返す
 * @param date string ISO8601形式の日時文字列
 */
export const formatJst = (date: string) => {
  // データがない場合空文字を返す
  if (!date) return "";

  return format(parseISO(date), "yyyy年MM月dd日 HH:mm:ss");
};
