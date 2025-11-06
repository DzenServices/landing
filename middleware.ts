import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware не используется. Оставлен no-op на случай будущих задач.
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  // Полностью отключаем матчинг
  matcher: [],
};
