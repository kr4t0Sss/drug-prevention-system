# 🛡️ Hệ thống Phòng chống Ma túy

## 📖 Giới thiệu

Hệ thống Phòng chống Ma túy là một ứng dụng web toàn diện được thiết kế để hỗ trợ cộng đồng trong việc giáo dục, phòng ngừa và can thiệp sớm các vấn đề liên quan đến ma túy. Ứng dụng cung cấp các công cụ đánh giá, khóa học giáo dục, dịch vụ tư vấn chuyên nghiệp và hệ thống quản trị toàn diện.

## ✨ Tính năng chính

### 🎯 Đánh giá và Sàng lọc
- **Đánh giá ASSIST**: Công cụ sàng lọc quốc tế cho việc sử dụng chất gây nghiện
- **Đánh giá CRAFFT**: Công cụ sàng lọc chuyên biệt cho thanh thiếu niên
- **Báo cáo chi tiết**: Kết quả đánh giá với khuyến nghị cụ thể
- **Theo dõi tiến trình**: Lưu trữ lịch sử đánh giá để theo dõi sự thay đổi

### 📚 Khóa học Giáo dục (6 khóa học hoàn chỉnh)
1. **Kiến thức cơ bản về ma túy**: Nền tảng về các loại ma túy và tác hại
2. **Kỹ năng từ chối và đối phó**: Phát triển kỹ năng từ chối áp lực bạn bè
3. **Vai trò của gia đình**: Hướng dẫn gia đình hỗ trợ phòng chống ma túy
4. **Chương trình phục hồi toàn diện**: Các phương pháp phục hồi và tái hòa nhập
5. **Tâm lý học và nghiện chất**: Hiểu sâu về cơ chế tâm lý nghiện chất
6. **Xây dựng cộng đồng an toàn**: Chiến lược xây dựng môi trường không ma túy

**Đặc điểm:**
- Thiết kế responsive với layout thống nhất
- Hình ảnh chất lượng cao từ Unsplash
- Theo dõi tiến độ học tập chi tiết
- Chứng chỉ hoàn thành

### 💬 Tư vấn Chuyên nghiệp
- **Tư vấn cá nhân**: 1-on-1 với chuyên gia tâm lý
- **Tư vấn gia đình**: Hỗ trợ toàn bộ gia đình
- **Trị liệu nhóm**: Chia sẻ kinh nghiệm cùng nhóm
- **Tư vấn trực tuyến**: Linh hoạt thời gian và địa điểm
- **Hotline khẩn cấp**: Hỗ trợ 24/7

### 🔧 Hệ thống Quản trị Admin

#### Dashboard Tổng quan
- **Thống kê realtime**: Người dùng, khóa học, đánh giá, tư vấn
- **Biểu đồ phân tích**: Tăng trưởng người dùng, phân bố rủi ro
- **Hoạt động gần đây**: Theo dõi hoạt động người dùng
- **Cảnh báo khẩn cấp**: Thông báo trường hợp cần can thiệp

#### Quản lý Người dùng
- **Bảng người dùng**: Tìm kiếm, lọc, phân trang
- **Quản lý vai trò**: User, Counselor, Admin
- **Theo dõi rủi ro**: Phân loại mức độ rủi ro
- **Thao tác hàng loạt**: Xuất Excel, gửi thông báo
- **Chi tiết người dùng**: Thông tin đầy đủ và lịch sử

#### Quản lý Khóa học
- **CRUD khóa học**: Tạo, sửa, xóa khóa học
- **Thống kê chi tiết**: Đăng ký, hoàn thành, tỷ lệ thành công
- **Quản lý nội dung**: Upload hình ảnh, video
- **Phân tích hiệu quả**: Đánh giá chất lượng khóa học

#### Quản lý Đánh giá
- **Phân tích kết quả**: Biểu đồ phân bố rủi ro
- **Xu hướng theo thời gian**: Thống kê theo tháng
- **Khuyến nghị can thiệp**: Tự động tạo kế hoạch hỗ trợ
- **Báo cáo chi tiết**: Export dữ liệu cho nghiên cứu

### 👤 Quản lý Hồ sơ Nâng cao
- **Thông tin cá nhân**: Upload avatar, cập nhật thông tin
- **Thống kê cá nhân**: Khóa học, tư vấn, chứng chỉ
- **Thành tích**: Hệ thống huy hiệu và milestone
- **Lịch sử chi tiết**: Timeline hoạt động đầy đủ
- **Đánh giá tiến trình**: Biểu đồ phát triển cá nhân

## 🚀 Cài đặt và Chạy ứng dụng

### Yêu cầu hệ thống
- Node.js (phiên bản 16 trở lên)
- npm hoặc yarn
- Trình duyệt web hiện đại
- Firebase project (tùy chọn)

### Cài đặt nhanh
```bash
# Clone repository
git clone https://github.com/yourusername/drug-prevention-system.git
cd drug-prevention-system

# Cài đặt dependencies
npm install

# Chạy ứng dụng ở chế độ development
npm start

# Build ứng dụng cho production
npm run build
```

### Cấu hình Firebase
1. Tạo project Firebase tại https://console.firebase.google.com
2. Enable Authentication (Email/Password) và Firestore
3. Tạo file `.env` trong thư mục gốc:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## 📱 Hướng dẫn sử dụng

### Cho Người dùng

#### Đăng ký và Đăng nhập
1. Truy cập trang chủ và nhấn "Đăng ký"
2. Điền thông tin và xác thực email
3. Đăng nhập để truy cập đầy đủ tính năng

#### Thực hiện Đánh giá
1. Vào mục "Đánh giá" từ menu
2. Chọn ASSIST hoặc CRAFFT phù hợp
3. Trả lời câu hỏi trung thực
4. Xem kết quả và khuyến nghị

#### Tham gia Khóa học
1. Duyệt 6 khóa học có sẵn
2. Click "Xem nội dung" để bắt đầu
3. Hoàn thành các module
4. Nhận chứng chỉ

#### Đặt lịch Tư vấn
1. Chọn loại tư vấn phù hợp
2. Chọn thời gian và chuyên gia
3. Điền thông tin liên hệ
4. Nhận xác nhận

### Cho Admin

#### Truy cập Admin Panel
1. Đăng nhập với tài khoản admin
2. Click avatar → "Admin Panel"
3. Hoặc truy cập `/admin/dashboard`

#### Quản lý Người dùng
1. Vào "Quản lý người dùng"
2. Sử dụng bộ lọc và tìm kiếm
3. Xem chi tiết, chỉnh sửa, hoặc khóa tài khoản
4. Xuất báo cáo Excel

#### Quản lý Khóa học
1. Vào "Quản lý khóa học"
2. Xem thống kê tổng quan
3. Thêm/sửa/xóa khóa học
4. Theo dõi tỷ lệ hoàn thành

## 🎨 Thiết kế và UX

### Nguyên tắc Thiết kế
- **Professional Healthcare**: Thiết kế y tế chuyên nghiệp
- **Accessibility First**: WCAG 2.1 AA compliant
- **Mobile Responsive**: Tối ưu cho mọi thiết bị
- **Consistent UI**: Thống nhất trên toàn hệ thống

### Hệ thống Màu sắc
- **Primary Blue**: #1565c0 - Tin cậy, chuyên nghiệp
- **Success Green**: #2e7d32 - Tích cực, phục hồi
- **Warning Orange**: #ed6c02 - Cảnh báo, chú ý
- **Error Red**: #d32f2f - Nguy hiểm, khẩn cấp

### Typography & Layout
- **Font**: Inter (Google Fonts) - Hiện đại, dễ đọc
- **Grid System**: Material-UI responsive grid
- **Cards**: Uniform height, consistent spacing
- **Shadows**: Professional depth và elevation

## 🛠️ Công nghệ sử dụng

### Frontend Stack
- **React 18**: Framework JavaScript hiện đại
- **Material-UI 5**: Component library chuyên nghiệp
- **React Router v6**: SPA routing
- **Recharts**: Biểu đồ và analytics
- **Date-fns**: Xử lý ngày tháng

### Backend & Services
- **Firebase Auth**: Xác thực người dùng
- **Firestore**: NoSQL database
- **Firebase Hosting**: Deployment platform
- **Context API**: State management

### Development Tools
- **Create React App**: Build tools và boilerplate
- **ESLint**: Code quality
- **Prettier**: Code formatting
- **Git**: Version control

## 📊 Kiến trúc Hệ thống

```
src/
├── components/
│   ├── admin/              # Admin panel
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminLayout.jsx
│   │   ├── UserManagement.jsx
│   │   ├── CourseManagement.jsx
│   │   └── AssessmentManagement.jsx
│   ├── assessment/         # Assessment tools
│   ├── auth/              # Authentication
│   ├── counseling/        # Counseling system
│   ├── courses/           # Course platform
│   ├── home/              # Landing page
│   ├── layout/            # Layout components
│   └── profile/           # User profiles
├── contexts/              # React contexts
├── config/               # Firebase config
└── types/                # TypeScript definitions
```

## 🔒 Bảo mật và Quyền riêng tư

### Xác thực và Phân quyền
- Firebase Authentication
- Role-based access control (User, Counselor, Admin)
- Protected routes cho từng vai trò
- Session management

### Bảo vệ Dữ liệu
- HTTPS encryption
- Firestore security rules
- Privacy-compliant data handling
- HIPAA considerations

### Kiểm soát Truy cập
- **Public**: Trang chủ, danh sách khóa học
- **User**: Khóa học, đánh giá, hồ sơ
- **Counselor**: Quản lý client, session tools
- **Admin**: Full system access

## 📈 Analytics và Báo cáo

### Metrics Người dùng
- Đăng ký và kích hoạt
- Tham gia khóa học và hoàn thành
- Kết quả đánh giá
- Tham dự tư vấn

### Hiệu suất Hệ thống
- Page load times
- User engagement
- Feature usage
- Error tracking

### Đo lường Tác động
- Cải thiện mức rủi ro theo thời gian
- Hiệu quả khóa học
- Kết quả tư vấn
- Engagement cộng đồng

## 🚀 Deployment

### Firebase Hosting (Khuyến nghị)
```bash
npm run build
firebase deploy
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload build folder
```

## 🤝 Đóng góp

### Quy trình Contribute
1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

### Coding Standards
- Follow React best practices
- Use Material-UI components
- Write meaningful commit messages
- Add tests for new features
- Update documentation

## 📞 Hỗ trợ

### Liên hệ Khẩn cấp
- **Hotline**: 1900-1234 (24/7)
- **Crisis Text**: Text "HELP" to 741741
- **Emergency**: 911 hoặc cấp cứu địa phương

### Hỗ trợ Kỹ thuật
- **Email**: support@phongchongmatuy.gov.vn
- **Documentation**: [Project Wiki](https://github.com/yourusername/drug-prevention-system/wiki)
- **Issues**: [GitHub Issues](https://github.com/yourusername/drug-prevention-system/issues)

## 📄 License

Dự án này được phát hành dưới giấy phép MIT. Xem file [LICENSE](./LICENSE) để biết thêm chi tiết.

## 🙏 Acknowledgments

- **World Health Organization (WHO)** - Assessment tools và guidelines
- **Material-UI Team** - Excellent component library
- **Firebase Team** - Robust backend services
- **React Community** - Amazing ecosystem
- **Healthcare Professionals** - Domain expertise

## 🎯 Roadmap

### ✅ Phase 1 (Hoàn thành)
- Hệ thống quản lý người dùng đầy đủ
- Platform khóa học với 6 khóa học
- Công cụ đánh giá CRAFFT và ASSIST
- Tính năng tư vấn cơ bản
- Admin dashboard hoàn chỉnh
- Responsive design chuyên nghiệp

### 📋 Phase 2 (Kế hoạch)
- Mobile app development
- Push notifications
- Advanced analytics
- Multi-language support
- AI-powered recommendations

### 🔮 Phase 3 (Tương lai)
- Gamification features
- Community forums
- Video counseling
- Healthcare provider integration
- Research tools

---

**🌟 Được xây dựng với tình yêu cho sức khỏe cộng đồng**

*Dự án này hướng đến việc làm cho giáo dục và hỗ trợ phòng chống ma túy trở nên dễ tiếp cận cho mọi người. Cùng nhau, chúng ta có thể xây dựng những cộng đồng mạnh mẽ và khỏe mạnh hơn.*

📞 **Đường dây nóng 24/7: 1900 1234**
