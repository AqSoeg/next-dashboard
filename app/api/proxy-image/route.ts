import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://www.loliapi.com/acg/', {
      cache: 'no-store' // 确保每次获取新图片
    });
    
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
    }
    
    // 返回图片URL
    return NextResponse.json({ imageUrl: response.url });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching image' }, { status: 500 });
  }
}