import { NextRequest, NextResponse } from 'next/server';
import { getImageUrl, getBaseHash } from '@/utils/imageHash';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const hash = searchParams.get('hash');
    
    console.log('API Images - Hash recebido:', hash);
    
    if (!hash) {
      return new NextResponse('Hash parameter is required', { status: 400 });
    }
    
    // Validação simplificada para debug
    const baseHash = getBaseHash(hash);
    console.log('API Images - Base hash:', baseHash);
    const imagePath = getImageUrl(baseHash);
    console.log('API Images - Image path:', imagePath);
    
    // Validação simplificada
    if (!imagePath || imagePath === '/images/placeholder.png') {
      console.log('API Images - Hash inválido:', hash);
      return new NextResponse('Invalid image hash', { status: 403 });
    }
    
    const fullPath = join(process.cwd(), 'public', imagePath);
    console.log('API Images - Full path:', fullPath);
    console.log('API Images - File exists:', require('fs').existsSync(fullPath));
    
    try {
      const imageBuffer = await readFile(fullPath);
      
      // Determinar o tipo MIME baseado na extensão
      const ext = imagePath.split('.').pop()?.toLowerCase();
      let contentType = 'image/png'; // padrão
      
      if (ext === 'jpg' || ext === 'jpeg') {
        contentType = 'image/jpeg';
      } else if (ext === 'gif') {
        contentType = 'image/gif';
      } else if (ext === 'webp') {
        contentType = 'image/webp';
      }
      
      return new NextResponse(imageBuffer, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=31536000', // 1 ano
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
        },
      });
    } catch (error) {
      console.error('Error reading image file:', error);
      return new NextResponse('Image not found', { status: 404 });
    }
  } catch (error) {
    console.error('Error in image API:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
} 
