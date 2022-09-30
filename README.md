# template-grpc-nodejs

## 初始步驟
   1. `npm i`  ( 若您的電腦使用 Apple Silicon 處理器，則需要另加參數 --target_arch=x64)
   2. `npm run protoc-gen`  **編譯 proto 檔案**
   3. `npm run protoc-reflection`  **建立 reflection 檔案，為此 proto 提供公開的參考**
   4. `npm build`
   5. `npm start:server`
---
## 建立 proxy (若需要由瀏覽器呼叫 GRPC 服務，需建立 proxy)
 1. 編輯 **envoy-cloud-run.yaml** 檔案，修改 address、port_value、sni ... 等參數
 2. `npm run docker:run-proxy` **在本地執行 docker proxy**
---
## 部署方式
    npm run deploy