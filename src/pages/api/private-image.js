import fs from 'fs';
import path from 'path';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

import authUtil from "../../utils/authUtil";

export default async function handler(req, res) {
  // 사용자 인증 및 권한 검사를 수행하십시오.
  // 인증되지 않은 사용자의 경우 401 Unauthorized 응답을 반환합니다.
  if (!authUtil.isAuthenticated(req)) {
    res.status(401).send('Unauthorized');
    return;
  }

  // private-assets 폴더의 이미지 파일 경로를 가져옵니다.
  const imagePath = path.join(process.cwd(), 'private-assets', 'private-image.jpg');

  // 이미지 파일의 내용을 읽습니다.
  const imageFile = fs.readFileSync(imagePath);

  // 적절한 Content-Type 헤더를 설정하고 이미지 데이터를 반환합니다.
  res.setHeader('Content-Type', 'image/jpeg');
  res.send(imageFile);
}
