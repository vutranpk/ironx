# IronX - Project Documentation & Content Strategy

Tài liệu này định nghĩa cấu trúc dự án (Tech Stack), sơ đồ trang (Sitemap) và hệ thống Nội dung (Copywriting) cốt lõi cho Landing Page IronX. Nội dung được tối ưu hóa dựa trên nghiên cứu tâm lý khách hàng tại thị trường Fitness Việt Nam.

---

## 1. Quyết Định Công Nghệ (Tech Stack Lockdown)

Dựa trên yêu cầu về một giao diện mang tính thẩm mỹ cao (Aesthetics), tốc độ tải trang nhanh và hỗ trợ chuyển động (Micro-animations) mượt mà, tôi đã lựa chọn Tech Stack sau:

*   **Cấu trúc (Structure):** `Next.js 14` (App Router) với `React`. (Đảm bảo SEO tuyệt đối và hiệu năng cực cao).
*   **Styling (Định dạng):** `100% Tailwind CSS`. (Viết class trực tiếp, không sử dụng file CSS rời để đảm bảo tính nhất quán và tốc độ code).
*   **Logic & Ngôn ngữ:** `TypeScript`.
*   **Hoạt ảnh (Animations):** `Framer Motion`. (Thư viện hàng đầu của React để xử lý các hiệu ứng cuộn trang, fade-in, hover sang trọng).

*Lưu ý: Mọi đoạn code được sinh ra sau này sẽ BẮT BUỘC tuân thủ chặt chẽ Tech Stack này.*

---

## 2. Cấu trúc Trang (Sitemap)
Vì đây là Landing Page, toàn bộ nội dung sẽ được cuộn trên một trang duy nhất (Single-page scroll), bao gồm các Section chính:
1.  `#hero` - Khu vực màn hình đầu (First Impression).
2.  `#about` - Tuyên ngôn thương hiệu (Philosophy).
3.  `#facilities` - Khu vực luyện tập (Khoe cơ sở vật chất).
4.  `#classes` - Danh sách bộ môn chuyên sâu.
5.  `#coaches` - Đội ngũ chuyên gia (Social Proof).
6.  `#cta` - Kêu gọi hành động & Footer.

---

## 3. Nội Dung Tiếng Việt (Copywriting & Content Context)

Nội dung được dịch thuật và phóng tác dựa trên bộ UI Mockups của IronX, kết hợp với các "từ khóa chốt sale" phù hợp với thị hiếu người Việt.

### 3.1. Hero Section (Đập vào mắt)
*   **Tagline:** `( VƯỢT QUA GIỚI HẠN )`
*   **Headline chính (H1):** Tập Luyện Có Chủ Đích. Sống Đầy Sức Mạnh.
*   **Đoạn mô tả ngắn (Subtitle):** Không gian của chúng tôi kết hợp trang thiết bị đẳng cấp, huấn luyện viên chuyên nghiệp và bầu không khí tràn đầy năng lượng giúp bạn tập luyện thông minh hơn, di chuyển linh hoạt hơn và mạnh mẽ hơn mỗi ngày.
*   **Nút CTA (Call-to-Action):** Khám Phá Lịch Tập `>>`

### 3.2. About/Philosophy (Triết lý)
*   **Tagline:** `( THIẾT KẾ CHO HIỆU SUẤT )`
*   **Tiêu đề (H2):** Không Chỉ Là Phòng Tập — Đây Là Nơi Đột Phá Giới Hạn.
*   **Cards Lợi ích:**
    *   *Trang Thiết Bị Hiện Đại:* Đầu tư 100% máy móc nhập khẩu chuẩn quốc tế, đáp ứng mọi nhu cầu từ sức mạnh đến linh hoạt.
    *   *Môi Trường Truyền Cảm Hứng:* Tập luyện trong một không gian sạch sẽ, năng động và một cộng đồng luôn thúc đẩy bạn tiến lên.
    *   *Tiện Ích 5 Sao:* Tủ đồ cá nhân an toàn, phòng tắm rộng rãi và khu vực xông hơi phục hồi thể lực sau tập.

### 3.3. Facilities/Areas (Khu vực luyện tập)
*   **01 - Tập Luyện Chức Năng (Functional Training):** Không gian chuyên biệt cho các bài tập chức năng, cải thiện độ linh hoạt, thăng bằng và giảm thiểu chấn thương.
*   **02 - Khu Vực Tim Mạch (Cardio Area):** Trang bị đầy đủ máy chạy bộ, máy chèo thuyền và eliptical trong một môi trường tràn ngập năng lượng.
*   **03 - Hình Thể & Pilates (Fitness & Pilates):** Khu vực tạ tự do và máy tập kháng lực, hoàn hảo cho việc xây dựng cơ bắp và định hình vóc dáng.

### 3.4. Classes (Các bộ môn - List Menu)
*   **Lớp Cardio Đốt Mỡ:** Khu vực trang bị đầy đủ dụng cụ tập luyện tim mạch cường độ cao.
*   **Stretching (Dãn cơ phục hồi):** Tập trung vào nhịp tim, phổi và độ bền bỉ. Cải thiện khả năng vận động hàng ngày.
*   **Huấn Luyện TRX:** Thử thách cơ bắp phát huy lực tối đa, liên quan đến các bài tập kháng lực toàn diện.
*   **Pilates Cổ Điển:** Tối ưu hóa tỷ lệ mỡ và cơ bắp. Cân bằng dinh dưỡng kết hợp tập luyện giúp định hình cơ thể hoàn hảo.
*   **CrossFit:** Tăng cường khả năng kiểm soát chuyển động cơ thể, quan trọng cho các hoạt động thể thao hiệu suất cao.

### 3.5. Coaches (Đội ngũ PT)
*   **Tagline:** `( NHỮNG NGƯỜI DẪN DẮT THÀNH CÔNG )`
*   **Tiêu đề (H2):** Đội Ngũ Chuyên Gia Tận Tâm Cùng Bạn Lột Xác.
*   **Con số ấn tượng (Stats):** 
    *   `150+` Hội viên lột xác thành công.
    *   `34` Huấn luyện viên đạt chuẩn.
    *   `240` Mét vuông không gian tập luyện chuyên nghiệp.

### 3.6. CTA & Footer (Chốt sale)
*   **Background Text lớn:** `SỨC MẠNH X2`
*   **Tiêu đề chốt (H2):** Khai Phá Toàn Bộ Tiềm Năng Của Bạn.
*   **Nút CTA:** Trở Thành Hội Viên Ngay `>>`
*   **Footer Info:** Địa chỉ, Email, Số điện thoại liên hệ, Các liên kết mạng xã hội.
