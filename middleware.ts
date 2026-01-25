import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Не блокируем страницу по query-параметрам, чтобы
// аудиты/поисковые боты видели реальный контент.
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/en"],
};
