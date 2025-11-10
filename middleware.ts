import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Блокируем обработку корневого роута, если присутствует query-параметр `q`
export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const { pathname, searchParams } = url;

  // Целимся только в корень и локаль en
  const isRoot = pathname === "/" || pathname === "/en";
  const hasSearchQ = searchParams.has("q");

  if (isRoot && hasSearchQ) {
    // Возвращаем 404, переписывая на встроенную страницу not-found
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Ограничиваем работу middleware только корнем и "/en"
  matcher: ["/", "/en"],
};
