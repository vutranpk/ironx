# IronX - Design System Guidelines

Tài liệu này đóng vai trò là "Nguồn chân lý" (Single Source of Truth) cho toàn bộ hệ thống thiết kế (Design System) của dự án IronX, được trích xuất trực tiếp từ 3 bản thiết kế gốc (UI Mockups). 
Tất cả code Frontend (Tailwind CSS/BEM) PHẢI tuân thủ 100% theo các quy chuẩn dưới đây.

---

## 1. Màu sắc (Color Palette)

Hệ thống sử dụng bảng màu Đơn sắc (Monochromatic) tập trung vào độ tương phản cao, mang lại cảm giác mạnh mẽ, cao cấp và đậm chất thể thao.

### Nền (Backgrounds)
*   **Dark Background (Chủ đạo):** `#161616` hoặc `#111111` (Dùng cho các section tối màu, tạo chiều sâu).
*   **Light Background (Nhấn mạnh):** `#EBEBEB` hoặc `#F4F4F4` (Dùng cho Hero section bản 1 & 3, tạo sự tương phản gắt).
*   **Card/Surface Background:** `#1E1E1E` (Dùng cho các khối nổi trên nền đen để tạo phân lớp).

### Văn bản (Text Colors)
*   **Primary Text (Dark Mode):** `#FFFFFF` (Tiêu đề, text chính trên nền đen).
*   **Primary Text (Light Mode):** `#111111` (Tiêu đề, text chính trên nền sáng).
*   **Muted/Secondary Text:** `#8C8C8C` hoặc `#A3A3A3` (Cho đoạn văn mô tả, sub-title, caption).

---

## 2. Nghệ thuật chữ (Typography)

Sử dụng phông chữ không chân (Sans-serif) mang tính hình học (Geometric), nét dày, dứt khoát.
*   **Font Family Đề xuất:** `Clash Display`, `Space Grotesk`, hoặc `Syne` (cho Tiêu đề) kết hợp với `Inter` hoặc `Manrope` (cho Body text).

### Hệ thống kích thước (Desktop)
*   **H1 (Hero Title):** Kích thước siêu lớn (Super-sized), khoảng `100px - 140px`. Font-weight: `Bold / Black`. Kerning (Khoảng cách chữ) hẹp (tighter).
*   **H2 (Section Title):** Khoảng `48px - 64px`. Font-weight: `SemiBold / Medium`.
*   **H3 (Card Title):** Khoảng `24px - 32px`. Font-weight: `Medium`.
*   **Body Text:** Khoảng `16px - 18px`. Font-weight: `Regular`. Line-height lớn (khoảng `1.6` - `1.8`) để dễ đọc.
*   **Watermark/Background Text:** Chữ siêu khổng lồ (ví dụ: "Smart Fitness", "nt meets results"), opacity cực thấp (`~3-5%`), đặt chìm dưới background.

---

## 3. Bố cục & Không gian (Layout & Spacing)

Thiết kế đề cao sự rộng rãi, không nhồi nhét, giúp giao diện "thở" (breathe).

*   **Grid System:** Sử dụng hệ thống Grid 12 cột chuẩn, max-width cho container khoảng `1280px` - `1440px`.
*   **Section Padding (Khoảng cách giữa các phần):** Cực kỳ lớn. Ít nhất `120px` đến `160px` (Desktop) theo trục Y (trên/dưới) để phân tách rõ ràng các khu vực.
*   **Góc bo (Border Radius):** 
    *   Sử dụng góc vuông vức `0px` (Sharp edges) cho nút bấm, viền ảnh để tạo sự cứng cáp, nam tính.
    *   *Hoặc* bo góc cực nhẹ `4px - 8px` nếu muốn mềm mại hơn một chút (ở bản số 3).
*   **Đường viền (Borders):** Sử dụng các đường kẻ line rất mỏng (`1px`), màu xám mờ (`#333333`) để chia cắt các danh sách (như list Classes ở bản 3).

---

## 4. UI Components (Thành phần giao diện)

### Nút bấm (Buttons)
*   **Primary Button:** Nền Trắng, chữ Đen (hoặc ngược lại tùy background). Thiết kế hình chữ nhật vuông vức, đính kèm icon mũi tên (Chevron Right `>>`) tinh tế.
*   **Hover Effect:** Khi hover, đổi màu nền hoặc có hiệu ứng trượt mượt mà (transition `0.3s ease-in-out`).

### Hình ảnh (Imagery)
*   Hình ảnh phải sắc nét, có độ tương phản cao, ám tone màu lạnh hoặc desaturated (giảm độ rực rỡ của màu sắc khác, chỉ giữ lại tone da người và xám/đen).
*   **Overlays:** Khi đặt text lên trên ảnh (như các khối Card), luôn có một lớp gradient đen mờ (`linear-gradient`) phủ từ dưới lên hoặc từ trái qua để đảm bảo text luôn dễ đọc.

### Vi phẫu thẩm mỹ (Micro-aesthetics)
*   Sử dụng các thẻ Tag nhỏ (Ví dụ: `( MORE THAN A GYM )`, `( STRENGTH )`) bọc trong ngoặc đơn, font size siêu nhỏ (`10-12px`), uppercase, letter-spacing rộng. Đây là chi tiết ăn tiền tạo nên sự cao cấp.

---

## 5. Nguyên tắc Responsive (Mobile-First)

*Tham chiếu theo rule Mobile-First trong `GEMINI.md`:*
*   **Mobile (< 1024px):** Các cột (Grid) sẽ stack dọc 100%. Các Heading H1 siêu lớn phải được scale down xuống (khoảng `48px-64px`) để không bị tràn màn hình. Padding các section giảm xuống còn khoảng `60px - 80px`.
*   **Desktop (>= 1024px):** Giữ nguyên tỷ lệ vàng, bung rộng không gian theo chiều ngang, kích hoạt các hiệu ứng Hover phức tạp.
