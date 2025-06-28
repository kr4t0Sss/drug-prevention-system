# 🛡️ Hệ thống Phòng chống Ma túy

## 📖 Giới thiệu

Hệ thống Phòng chống Ma túy là một ứng dụng web toàn diện được thiết kế để hỗ trợ cộng đồng trong việc giáo dục, phòng ngừa và can thiệp sớm các vấn đề liên quan đến ma túy. Ứng dụng cung cấp các công cụ đánh giá, khóa học giáo dục, dịch vụ tư vấn chuyên nghiệp và các chương trình cộng đồng.

## ✨ Tính năng chính

### 🎯 Đánh giá và Sàng lọc
- **Đánh giá ASSIST**: Công cụ sàng lọc quốc tế cho việc sử dụng chất gây nghiện
- **Đánh giá CRAFFT**: Công cụ sàng lọc chuyên biệt cho thanh thiếu niên
- **Báo cáo chi tiết**: Kết quả đánh giá với khuyến nghị cụ thể
- **Theo dõi tiến trình**: Lưu trữ lịch sử đánh giá để theo dõi sự thay đổi

### 📚 Khóa học Giáo dục
- **Nội dung khoa học**: Thông tin chính xác về các loại ma túy và tác hại
- **Học tập tương tác**: Video, hình ảnh và bài tập thực hành
- **Tiến độ học tập**: Theo dõi quá trình hoàn thành khóa học
- **Chứng chỉ hoàn thành**: Cấp chứng chỉ sau khi hoàn thành khóa học

### 💬 Tư vấn Chuyên nghiệp
- **Tư vấn cá nhân**: Gặp gỡ riêng với chuyên gia tâm lý
- **Tư vấn gia đình**: Hỗ trợ toàn bộ gia đình trong quá trình phục hồi
- **Trị liệu nhóm**: Chia sẻ kinh nghiệm với những người có cùng hoàn cảnh
- **Tư vấn trực tuyến**: Linh hoạt thời gian và địa điểm

### 🏘️ Chương trình Cộng đồng
- **Hội thảo giáo dục**: Các buổi học cho học sinh, phụ huynh, giáo viên
- **Khảo sát đánh giá**: Thu thập phản hồi trước và sau chương trình
- **Hoạt động nhóm**: Xây dựng mạng lưới hỗ trợ cộng đồng
- **Sự kiện định kỳ**: Các hoạt động nâng cao nhận thức

### 👤 Quản lý Hồ sơ
- **Thông tin cá nhân**: Quản lý thông tin và thiết lập tài khoản
- **Lịch sử hoạt động**: Theo dõi các khóa học, tư vấn đã tham gia
- **Thành tích**: Hệ thống huy hiệu và chứng chỉ
- **Tiến trình phát triển**: Biểu đồ theo dõi sự tiến bộ

## 🚀 Cài đặt và Chạy ứng dụng

### Yêu cầu hệ thống
- Node.js (phiên bản 16 trở lên)
- npm hoặc yarn
- Trình duyệt web hiện đại

### Cài đặt
```bash
# Clone repository
git clone [repository-url]
cd drug-prevention-system

# Cài đặt dependencies
npm install

# Chạy ứng dụng ở chế độ development
npm start

# Build ứng dụng cho production
npm run build
```

### Cấu hình Firebase (Tùy chọn)
Nếu muốn sử dụng Firebase cho xác thực và lưu trữ dữ liệu:

1. Tạo project Firebase tại https://console.firebase.google.com
2. Cấu hình Authentication và Firestore
3. Cập nhật file `src/config/firebase.js` với thông tin project của bạn

## 📱 Hướng dẫn sử dụng

### Cho Người dùng cá nhân

#### 1. Đăng ký và Đăng nhập
- Truy cập trang chủ và nhấn "Đăng ký"
- Điền thông tin cơ bản và xác thực email
- Đăng nhập để truy cập đầy đủ tính năng

#### 2. Thực hiện Đánh giá
- Vào mục "Đánh giá" từ menu chính
- Chọn loại đánh giá phù hợp (ASSIST hoặc CRAFFT)
- Trả lời các câu hỏi một cách trung thực
- Xem kết quả và khuyến nghị

#### 3. Tham gia Khóa học
- Duyệt danh sách khóa học có sẵn
- Đăng ký khóa học phù hợp
- Học theo tiến độ cá nhân
- Hoàn thành để nhận chứng chỉ

#### 4. Đặt lịch Tư vấn
- Chọn loại hình tư vấn phù hợp
- Chọn thời gian và chuyên gia
- Điền thông tin liên hệ
- Nhận xác nhận qua email/SMS

### Cho Tổ chức và Giáo viên

#### 1. Tổ chức Chương trình
- Liên hệ để đăng ký tổ chức chương trình
- Chọn nội dung phù hợp với đối tượng
- Thực hiện khảo sát trước và sau chương trình
- Nhận báo cáo đánh giá hiệu quả

#### 2. Theo dõi Tiến độ
- Xem thống kê tham gia của học viên
- Đánh giá hiệu quả chương trình
- Điều chỉnh nội dung dựa trên phản hồi

## 🎨 Thiết kế và UX

### Nguyên tắc Thiết kế
- **Accessibility First**: Đảm bảo truy cập cho mọi người dùng
- **Mobile Responsive**: Tối ưu cho mọi thiết bị
- **Professional Look**: Thiết kế chuyên nghiệp, đáng tin cậy
- **User-Centered**: Tập trung vào trải nghiệm người dùng

### Hệ thống Màu sắc
- **Primary Blue**: #1565c0 - Tin cậy, chuyên nghiệp
- **Success Green**: #2e7d32 - Tích cực, phục hồi
- **Warning Orange**: #ed6c02 - Cảnh báo, chú ý
- **Error Red**: #d32f2f - Nguy hiểm, khẩn cấp

### Typography
- **Font chính**: Inter - Hiện đại, dễ đọc
- **Hierarchy rõ ràng**: Phân cấp thông tin hợp lý
- **Contrast cao**: Đảm bảo khả năng đọc

## 🛠️ Công nghệ sử dụng

### Frontend
- **React 18**: Framework JavaScript hiện đại
- **Material-UI**: Thư viện component chuyên nghiệp
- **React Router**: Định tuyến single-page application
- **Date-fns**: Xử lý ngày tháng

### Backend & Services
- **Firebase**: Authentication và Firestore database
- **Context API**: Quản lý state toàn cục
- **Local Storage**: Lưu trữ dữ liệu tạm thời

### Development Tools
- **Create React App**: Boilerplate và build tools
- **ESLint**: Kiểm tra chất lượng code
- **Prettier**: Format code tự động

## 📊 Tính năng Nâng cao

### Báo cáo và Thống kê
- Dashboard tổng quan cho quản trị viên
- Thống kê tham gia theo thời gian
- Báo cáo hiệu quả chương trình
- Export dữ liệu Excel/PDF

### Tích hợp API
- Kết nối với hệ thống y tế
- Đồng bộ dữ liệu với cơ sở dữ liệu quốc gia
- API cho ứng dụng mobile

### Bảo mật
- Mã hóa dữ liệu nhạy cảm
- Xác thực đa yếu tố
- Audit log đầy đủ
- Tuân thủ GDPR và quy định bảo mật

## 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp để cải thiện hệ thống:

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

### Coding Standards
- Sử dụng ESLint configuration có sẵn
- Viết comment cho các function phức tạp
- Test các tính năng mới
- Cập nhật documentation

## 📞 Hỗ trợ

### Liên hệ
- **Email**: support@phongchongmatuy.gov.vn
- **Hotline**: 1900 1234 (24/7)
- **Website**: https://phongchongmatuy.gov.vn

### Báo lỗi
- Tạo issue trên GitHub
- Mô tả chi tiết lỗi và cách tái hiện
- Đính kèm screenshot nếu có thể

### FAQ
Xem file [FAQ.md](./FAQ.md) để biết các câu hỏi thường gặp.

## 📄 License

Dự án này được phát hành dưới giấy phép MIT. Xem file [LICENSE](./LICENSE) để biết thêm chi tiết.

## 🙏 Acknowledgments

- Tổ chức Y tế Thế giới (WHO) - Công cụ đánh giá ASSIST
- American Academy of Pediatrics - Công cụ đánh giá CRAFFT
- Bộ Y tế Việt Nam - Hướng dẫn chuyên môn
- Cộng đồng open source - Các thư viện và tools

---

**Lưu ý**: Hệ thống này chỉ mang tính chất hỗ trợ và giáo dục. Không thay thế cho việc tư vấn y tế chuyên nghiệp. Nếu bạn hoặc người thân đang gặp vấn đề nghiêm trọng về ma túy, hãy liên hệ ngay với cơ sở y tế gần nhất.

📞 **Đường dây nóng 24/7: 1900 1234**
