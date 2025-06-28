import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  CircularProgress,
  Alert,
  IconButton,
  Tooltip,
  Chip,
  Stack,
  LinearProgress,
} from '@mui/material';
import {
  useParams,
  useNavigate
} from 'react-router-dom';
import {
  PlayCircleFilledWhite as PlayCircleFilledWhiteIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  School as SchoolIcon,
  Home as HomeIcon,
  MenuBook as MenuBookIcon,
  DoneAll as DoneAllIcon,
  ListAlt as ListAltIcon,
  CheckCircle as CheckCircleIcon,
  VideoLibrary as VideoLibraryIcon,
  OndemandVideo as OndemandVideoIcon,
  PlayArrow as PlayArrowIcon,
  Pause as PauseIcon,
} from '@mui/icons-material';

const mockCourses = [
  {
    id: '1',
    title: 'Kiến thức cơ bản về ma túy',
    description: 'Cung cấp kiến thức nền tảng về các loại ma túy, tác hại và cách phòng chống.',
    modules: [
      {
        id: '1.1',
        title: 'Giới thiệu tổng quan về ma túy',
        videoUrl: 'https://www.youtube.com/watch?v=zBZm0gXJF2E',
        content: (
          <>
            <Typography variant="h6" gutterBottom fontWeight={600}>Ma túy là gì?</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Ma túy là các chất gây nghiện, khi đưa vào cơ thể sẽ làm thay đổi chức năng sinh lý của cơ thể, gây ra trạng thái hưng phấn, ảo giác, hoặc suy nhược. Việc sử dụng ma túy kéo dài có thể dẫn đến nghiện, ảnh hưởng nghiêm trọng đến sức khỏe thể chất, tinh thần và cuộc sống cá nhân, gia đình, xã hội.</Typography>
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Lịch sử và sự phát triển của ma túy</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Ma túy đã tồn tại từ lâu trong lịch sử nhân loại, được sử dụng với nhiều mục đích khác nhau, từ y học đến nghi lễ. Tuy nhiên, cùng với sự phát triển của khoa học, các loại ma túy tổng hợp ngày càng đa dạng và có độc tính cao hơn, gây ra những thách thức lớn trong công tác phòng chống.</Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/courses/module1_1.jpg" alt="Giới thiệu ma túy" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </Box>
          </>
        ),
        completed: true,
      },
      {
        id: '1.2',
        title: 'Các loại ma túy phổ biến',
        videoUrl: 'https://www.youtube.com/watch?v=zBZm0gXJF2E',
        content: (
          <>
            <Typography variant="h6" gutterBottom fontWeight={600}>Heroin</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Heroin là một chất gây nghiện mạnh, có nguồn gốc từ cây thuốc phiện. Nó tác động trực tiếp đến hệ thần kinh trung ương, gây cảm giác hưng phấn tức thì nhưng sau đó là sự suy nhược và phụ thuộc nặng nề.</Typography>
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Methamphetamine (Ma túy đá)</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Ma túy đá là một chất kích thích mạnh, gây hưng phấn kéo dài, ảo giác, hoang tưởng. Việc sử dụng ma túy đá gây tổn thương nghiêm trọng đến não bộ và hệ tim mạch.</Typography>
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Cần sa</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Cần sa là một loại ma túy tự nhiên, có thể gây ra cảm giác thư giãn, thay đổi nhận thức. Tuy nhiên, việc sử dụng cần sa thường xuyên có thể dẫn đến các vấn đề về hô hấp và tâm lý.</Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/courses/module1_2.jpg" alt="Các loại ma túy" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </Box>
          </>
        ),
        completed: false,
      },
      {
        id: '1.3',
        title: 'Tác hại của ma túy đối với sức khỏe',
        content: (
          <>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Ma túy gây ra hàng loạt các vấn đề sức khỏe nghiêm trọng, từ tổn thương não bộ, gan, thận, đến các bệnh lây nhiễm như HIV/AIDS, viêm gan B, C do dùng chung kim tiêm. Ngoài ra, nó còn ảnh hưởng đến hệ miễn dịch, khiến cơ thể dễ mắc bệnh hơn.</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Nghiện ma túy còn dẫn đến các vấn đề xã hội như mất việc làm, tan vỡ gia đình, và hành vi phạm pháp để có tiền mua ma túy.</Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/courses/module1_3.jpg" alt="Tác hại ma túy" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </Box>
          </>
        ),
        completed: false,
      },
      {
        id: '1.4',
        title: 'Hệ lụy của ma túy đối với xã hội',
        content: (
          <>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Ma túy không chỉ hủy hoại cá nhân mà còn gây ra những hệ lụy nặng nề cho xã hội. Nó làm tăng tỷ lệ tội phạm, gây mất trật tự an toàn xã hội, và là gánh nặng lớn cho hệ thống y tế và pháp luật.</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Để bảo vệ cộng đồng, cần có sự chung tay của toàn xã hội trong công tác phòng chống ma túy, từ giáo dục, tuyên truyền đến các biện pháp can thiệp và hỗ trợ người nghiện tái hòa nhập cộng đồng.</Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/courses/module1_4.jpg" alt="Hệ lụy xã hội" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </Box>
          </>
        ),
        completed: false,
      },
    ],
  },
  {
    id: '2',
    title: 'Kỹ năng từ chối và đối phó',
    description: 'Học cách từ chối ma túy, đối phó với áp lực bạn bè và xây dựng lối sống lành mạnh.',
    modules: [
      {
        id: '2.1',
        title: 'Hiểu về áp lực bạn bè và môi trường xung quanh',
        videoUrl: 'https://www.youtube.com/watch?v=zBZm0gXJF2E',
        content: (
          <>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Áp lực bạn bè là một trong những yếu tố lớn dẫn đến việc sử dụng ma túy ở giới trẻ. Khóa học này giúp bạn nhận diện các loại áp lực và cách chúng tác động đến quyết định của bạn.</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>Việc nhận biết sớm các dấu hiệu và nguyên nhân của áp lực sẽ giúp bạn chủ động hơn trong việc đưa ra lựa chọn đúng đắn.</Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/courses/module2_1.jpg" alt="Áp lực bạn bè" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </Box>
          </>
        ),
        completed: true,
      },
      {
        id: '2.2',
        title: 'Các chiến lược từ chối hiệu quả',
        videoUrl: 'https://www.youtube.com/watch?v=zBZm0gXJF2E',
        content: (
          <>
            <Typography variant="h6" gutterBottom fontWeight={600}>5 Chiến lược từ chối hiệu quả</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              <strong>1. Từ chối trực tiếp:</strong> "Không, cảm ơn. Tôi không quan tâm." - Đây là cách đơn giản và rõ ràng nhất.
            </Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              <strong>2. Đưa ra lý do:</strong> "Tôi có trận đấu vào tuần tới, cần giữ sức khỏe tốt nhất." - Đưa ra lý do cụ thể và hợp lý.
            </Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              <strong>3. Đề xuất thay thế:</strong> "Thay vào đó, chúng ta đi xem phim nhé?" - Chuyển hướng sang hoạt động tích cực khác.
            </Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              <strong>4. Sử dụng "tôi" thay vì "bạn":</strong> "Tôi không muốn thử" thay vì "Bạn không nên làm vậy."
            </Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              <strong>5. Lặp lại và kiên định:</strong> Nếu bị ép buộc, hãy lặp lại lập trường của mình một cách bình tĩnh nhưng kiên quyết.
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Kỹ năng giao tiếp phi ngôn ngữ</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              • <strong>Giữ ánh mắt:</strong> Nhìn thẳng vào mắt người đối diện để thể hiện sự tự tin<br/>
              • <strong>Tư thế đứng thẳng:</strong> Không khép nép hay co ro<br/>
              • <strong>Giọng nói rõ ràng:</strong> Nói với âm lượng vừa phải, không run rẩy<br/>
              • <strong>Cử chỉ tay:</strong> Có thể giơ tay ra hiệu "dừng lại" một cách lịch sự
            </Typography>
            
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/courses/module2_2.jpg" alt="Kỹ năng từ chối" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </Box>
          </>
        ),
        completed: false,
      },
      {
        id: '2.3',
        title: 'Xây dựng lối sống lành mạnh và tích cực',
        videoUrl: 'https://www.youtube.com/watch?v=zBZm0gXJF2E',
        content: (
          <>
            <Typography variant="h6" gutterBottom fontWeight={600}>Các yếu tố của lối sống lành mạnh</Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3} color="primary.main">1. Hoạt động thể chất</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              • <strong>Thể thao đồng đội:</strong> Bóng đá, bóng rổ, bóng chuyền - giúp xây dựng tinh thần đồng đội<br/>
              • <strong>Thể thao cá nhân:</strong> Chạy bộ, bơi lội, yoga - giúp rèn luyện ý chí và sự kiên trì<br/>
              • <strong>Hoạt động ngoài trời:</strong> Đi bộ đường dài, leo núi, cắm trại - kết nối với thiên nhiên<br/>
              • <strong>Mục tiêu:</strong> Ít nhất 30 phút mỗi ngày, 5 ngày trong tuần
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3} color="primary.main">2. Sở thích và kỹ năng</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              • <strong>Nghệ thuật:</strong> Vẽ, chơi nhạc cụ, nhiếp ảnh, viết lách<br/>
              • <strong>Kỹ thuật:</strong> Lập trình, thiết kế, robotics<br/>
              • <strong>Học tập:</strong> Ngoại ngữ, kỹ năng mềm, chứng chỉ nghề nghiệp<br/>
              • <strong>Tình nguyện:</strong> Tham gia các hoạt động cộng đồng, từ thiện
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3} color="primary.main">3. Mối quan hệ tích cực</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              • <strong>Gia đình:</strong> Dành thời gian chất lượng với gia đình<br/>
              • <strong>Bạn bè tích cực:</strong> Kết bạn với những người có cùng giá trị sống<br/>
              • <strong>Mentor:</strong> Tìm kiếm người cố vấn, hướng dẫn<br/>
              • <strong>Cộng đồng:</strong> Tham gia các nhóm, câu lạc bộ có ích
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3} color="primary.main">4. Quản lý stress và cảm xúc</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              • <strong>Thiền và mindfulness:</strong> Thực hành 10-15 phút mỗi ngày<br/>
              • <strong>Ngủ đủ giấc:</strong> 7-9 tiếng mỗi đêm<br/>
              • <strong>Ăn uống lành mạnh:</strong> Nhiều rau xanh, trái cây, hạn chế đồ ăn nhanh<br/>
              • <strong>Quản lý thời gian:</strong> Lập kế hoạch, ưu tiên công việc quan trọng
            </Typography>
            
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <img src="/images/courses/module2_3.jpg" alt="Lối sống lành mạnh" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
            </Box>
          </>
        ),
        completed: false,
      },
      {
        id: '2.4',
        title: 'Thực hành tình huống thực tế',
        videoUrl: 'https://www.youtube.com/watch?v=zBZm0gXJF2E',
        content: (
          <>
            <Typography variant="h6" gutterBottom fontWeight={600}>Kịch bản 1: Tại trường học</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8, bgcolor: '#f5f5f5', p: 2, borderRadius: 1 }}>
              <strong>Tình huống:</strong> Một nhóm bạn trong lớp rủ bạn thử "thuốc lá điện tử" sau giờ học.<br/>
              <strong>Phản ứng tốt:</strong> "Cảm ơn nhưng mình không quan tâm. Mình phải về nhà sớm hôm nay. Chúng ta đi uống nước mát thay nhé?"<br/>
              <strong>Tại sao hiệu quả:</strong> Từ chối lịch sự, đưa ra lý do và đề xuất thay thế tích cực.
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Kịch bản 2: Tại bữa tiệc</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8, bgcolor: '#f5f5f5', p: 2, borderRadius: 1 }}>
              <strong>Tình huống:</strong> Tại một bữa tiệc, có người đưa cho bạn một viên thuốc lạ và nói "chỉ thử một lần thôi".<br/>
              <strong>Phản ứng tốt:</strong> "Không, cảm ơn. Mình không dùng những thứ này." Sau đó rời khỏi khu vực đó.<br/>
              <strong>Tại sao hiệu quả:</strong> Từ chối kiên quyết và tự bảo vệ bằng cách rời khỏi tình huống nguy hiểm.
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Kịch bản 3: Áp lực từ bạn thân</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8, bgcolor: '#f5f5f5', p: 2, borderRadius: 1 }}>
              <strong>Tình huống:</strong> Bạn thân nhất của bạn đang trải qua giai đoạn khó khăn và rủ bạn "thử để quên đi nỗi buồn".<br/>
              <strong>Phản ứng tốt:</strong> "Mình hiểu bạn đang buồn, nhưng điều này không giải quyết được vấn đề. Chúng ta nói chuyện hoặc tìm người có thể giúp bạn nhé?"<br/>
              <strong>Tại sao hiệu quả:</strong> Thể hiện sự đồng cảm nhưng vẫn từ chối, đồng thời đề xuất giải pháp tích cực.
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Luyện tập tại nhà</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              1. <strong>Thực hành trước gương:</strong> Luyện tập các câu từ chối với giọng điệu tự tin<br/>
              2. <strong>Role-play với gia đình:</strong> Nhờ gia đình đóng vai để thực hành<br/>
              3. <strong>Chuẩn bị câu trả lời:</strong> Nghĩ trước các tình huống có thể xảy ra<br/>
              4. <strong>Xây dựng mạng lưới hỗ trợ:</strong> Có danh sách những người có thể liên lạc khi cần giúp đỡ
            </Typography>
          </>
        ),
        completed: false,
      },
    ],
  },
  {
    id: '3',
    title: 'Hỗ trợ người nghiện và gia đình',
    description: 'Cung cấp kiến thức và kỹ năng hỗ trợ người nghiện ma túy và gia đình họ trong quá trình cai nghiện và tái hòa nhập.',
    modules: [
      {
        id: '3.1',
        title: 'Hiểu về nghiện ma túy và quá trình phục hồi',
        videoUrl: 'https://www.youtube.com/watch?v=zBZm0gXJF2E',
        content: (
          <>
            <Typography variant="h6" gutterBottom fontWeight={600}>Nghiện ma túy là gì?</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              Nghiện ma túy là một bệnh não mãn tính, phức tạp nhưng có thể điều trị được. Nó ảnh hưởng đến hệ thần kinh và thay đổi cách não bộ hoạt động, dẫn đến việc mất kiểm soát việc sử dụng ma túy mặc dù biết rõ hậu quả có hại.
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Các giai đoạn của nghiện</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              <strong>1. Thử nghiệm:</strong> Sử dụng lần đầu, thường do tò mò hoặc áp lực xã hội<br/>
              <strong>2. Sử dụng thường xuyên:</strong> Bắt đầu có thói quen sử dụng<br/>
              <strong>3. Sử dụng có vấn đề:</strong> Bắt đầu ảnh hưởng đến cuộc sống hàng ngày<br/>
              <strong>4. Nghiện:</strong> Mất kiểm soát hoàn toàn, không thể ngừng sử dụng
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Quá trình phục hồi</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              Phục hồi là một quá trình dài hạn, không phải điểm đến. Nó bao gồm:<br/>
              • <strong>Cai nghiện:</strong> Loại bỏ chất độc hại khỏi cơ thể<br/>
              • <strong>Tái thiết:</strong> Xây dựng lại kỹ năng sống và mối quan hệ<br/>
              • <strong>Duy trì:</strong> Giữ vững lối sống lành mạnh lâu dài<br/>
              • <strong>Tái hòa nhập:</strong> Quay trở lại với cộng đồng một cách tích cực
            </Typography>
          </>
        ),
        completed: false,
      },
      {
        id: '3.2',
        title: 'Cách hỗ trợ người thân nghiện ma túy',
        videoUrl: 'https://www.youtube.com/watch?v=zBZm0gXJF2E',
        content: (
          <>
            <Typography variant="h6" gutterBottom fontWeight={600}>Nguyên tắc hỗ trợ hiệu quả</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              <strong>1. Không phán xét:</strong> Tránh lên án, chỉ trích. Thay vào đó, thể hiện sự quan tâm và sẵn sàng giúp đỡ.<br/>
              <strong>2. Khuyến khích điều trị:</strong> Động viên họ tìm kiếm sự giúp đỡ chuyên nghiệp.<br/>
              <strong>3. Đặt ranh giới:</strong> Không cho tiền hoặc tạo điều kiện cho việc sử dụng ma túy.<br/>
              <strong>4. Chăm sóc bản thân:</strong> Bạn cũng cần được hỗ trợ và chăm sóc.
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Những điều nên làm</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8, bgcolor: '#e8f5e9', p: 2, borderRadius: 1 }}>
              ✅ Lắng nghe không phán xét<br/>
              ✅ Thể hiện tình yêu thương và hỗ trợ<br/>
              ✅ Tìm hiểu về nghiện và điều trị<br/>
              ✅ Khuyến khích điều trị chuyên nghiệp<br/>
              ✅ Tham gia nhóm hỗ trợ gia đình<br/>
              ✅ Giữ gìn sức khỏe tinh thần của bản thân
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Những điều không nên làm</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8, bgcolor: '#ffebee', p: 2, borderRadius: 1 }}>
              ❌ Cho tiền hoặc tài sản có thể bán được<br/>
              ❌ Bao che hoặc biện hộ cho hành vi của họ<br/>
              ❌ Đe dọa những điều bạn không thể thực hiện<br/>
              ❌ Cảm thấy tội lỗi vì tình trạng của họ<br/>
              ❌ Cố gắng kiểm soát việc sử dụng ma túy của họ<br/>
              ❌ Bỏ qua sức khỏe và hạnh phúc của bản thân
            </Typography>
          </>
        ),
        completed: false,
      },
      {
        id: '3.3',
        title: 'Tài nguyên và dịch vụ hỗ trợ',
        content: (
          <>
            <Typography variant="h6" gutterBottom fontWeight={600}>Đường dây nóng 24/7</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8, bgcolor: '#e3f2fd', p: 2, borderRadius: 1 }}>
              🔥 <strong>Đường dây nóng phòng chống ma túy:</strong> 1900 1234<br/>
              📞 <strong>Tư vấn tâm lý:</strong> 1900 5678<br/>
              🚨 <strong>Cấp cứu y tế:</strong> 115<br/>
              👮 <strong>Công an:</strong> 113
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Trung tâm điều trị</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              • <strong>Bệnh viện Tâm thần Trung ương 1:</strong> Hà Nội<br/>
              • <strong>Bệnh viện Tâm thần TP.HCM:</strong> TP. Hồ Chí Minh<br/>
              • <strong>Trung tâm Cai nghiện ma túy:</strong> Các tỉnh thành<br/>
              • <strong>Phòng khám tư nhân:</strong> Tham khảo danh sách được cấp phép
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Nhóm hỗ trợ</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              • <strong>Narcotics Anonymous (NA):</strong> Nhóm tự giúp cho người nghiện<br/>
              • <strong>Gia đình người nghiện:</strong> Nhóm hỗ trợ gia đình<br/>
              • <strong>Cộng đồng phục hồi:</strong> Mạng lưới người đã cai nghiện thành công<br/>
              • <strong>Tình nguyện viên:</strong> Đội ngũ hỗ trợ cộng đồng
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Ứng dụng hỗ trợ</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              • <strong>Sober Time:</strong> Theo dõi thời gian sạch<br/>
              • <strong>Recovery Dharma:</strong> Thiền và phục hồi<br/>
              • <strong>I Am Sober:</strong> Cộng đồng hỗ trợ trực tuyến<br/>
              • <strong>Quit Now:</strong> Theo dõi tiến trình cai nghiện
            </Typography>
          </>
        ),
        completed: false,
      },
    ],
  },
  {
    id: '4',
    title: 'Phòng chống ma túy trong cộng đồng',
    description: 'Xây dựng cộng đồng mạnh mẽ để phòng chống ma túy hiệu quả thông qua giáo dục, tuyên truyền và hỗ trợ.',
    modules: [
      {
        id: '4.1',
        title: 'Vai trò của cộng đồng trong phòng chống ma túy',
        videoUrl: 'https://www.youtube.com/watch?v=zBZm0gXJF2E',
        content: (
          <>
            <Typography variant="h6" gutterBottom fontWeight={600}>Tại sao cộng đồng quan trọng?</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              Cộng đồng đóng vai trò then chốt trong việc phòng chống ma túy vì nó tạo ra môi trường sống, học tập và làm việc của mọi người. Một cộng đồng mạnh mẽ có thể:
            </Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              • <strong>Ngăn ngừa:</strong> Tạo ra môi trường lành mạnh, giảm nguy cơ tiếp xúc ma túy<br/>
              • <strong>Phát hiện sớm:</strong> Nhận biết các dấu hiệu và can thiệp kịp thời<br/>
              • <strong>Hỗ trợ:</strong> Cung cấp mạng lưới hỗ trợ cho người nghiện và gia đình<br/>
              • <strong>Tái hòa nhập:</strong> Giúp người đã cai nghiện quay trở lại cuộc sống bình thường
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Các bên liên quan</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              <strong>1. Gia đình:</strong> Nền tảng đầu tiên của giáo dục và phòng chống<br/>
              <strong>2. Trường học:</strong> Môi trường giáo dục và định hình nhân cách<br/>
              <strong>3. Cơ quan chính quyền:</strong> Xây dựng chính sách và thực thi pháp luật<br/>
              <strong>4. Tổ chức xã hội:</strong> Các hoạt động tuyên truyền và hỗ trợ<br/>
              <strong>5. Doanh nghiệp:</strong> Tạo môi trường làm việc lành mạnh<br/>
              <strong>6. Cơ sở y tế:</strong> Điều trị và phục hồi
            </Typography>
          </>
        ),
        completed: false,
      },
      {
        id: '4.2',
        title: 'Tổ chức hoạt động tuyên truyền',
        content: (
          <>
            <Typography variant="h6" gutterBottom fontWeight={600}>Lập kế hoạch hoạt động</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              <strong>Bước 1: Xác định mục tiêu</strong><br/>
              • Nâng cao nhận thức về tác hại của ma túy<br/>
              • Trang bị kỹ năng từ chối cho giới trẻ<br/>
              • Tạo môi trường hỗ trợ cho người nghiện<br/>
              • Xây dựng mạng lưới cộng đồng mạnh mẽ
            </Typography>
            
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              <strong>Bước 2: Xác định đối tượng</strong><br/>
              • Học sinh, sinh viên<br/>
              • Phụ huynh và gia đình<br/>
              • Người lao động<br/>
              • Người nghiện và gia đình họ
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Hình thức hoạt động</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              • <strong>Hội thảo, tọa đàm:</strong> Chia sẻ kiến thức và kinh nghiệm<br/>
              • <strong>Triển lãm, poster:</strong> Trưng bày thông tin trực quan<br/>
              • <strong>Hoạt động văn hóa:</strong> Sân khấu, âm nhạc, thể thao<br/>
              • <strong>Truyền thông:</strong> Báo chí, mạng xã hội, website<br/>
              • <strong>Thi đua, cuộc thi:</strong> Sáng tác slogan, video clip<br/>
              • <strong>Tư vấn trực tiếp:</strong> Gặp gỡ và hỗ trợ cá nhân
            </Typography>
            
            <Typography variant="h6" gutterBottom fontWeight={600} mt={3}>Đánh giá hiệu quả</Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              • Số lượng người tham gia<br/>
              • Mức độ hiểu biết trước và sau hoạt động<br/>
              • Phản hồi từ cộng đồng<br/>
              • Thay đổi hành vi tích cực<br/>
              • Giảm số ca nghiện mới trong khu vực
            </Typography>
          </>
        ),
        completed: false,
      },
    ],
  },
];

// Custom Video Player Component with seeking restriction
const CustomVideoPlayer = ({ videoUrl, onProgress }) => {
  const [watchedPercentage, setWatchedPercentage] = useState(0);
  const [canSeek, setCanSeek] = useState(false);
  const [isWatching, setIsWatching] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (watchedPercentage >= 80) {
      setCanSeek(true);
    }
  }, [watchedPercentage]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startWatching = () => {
    if (!isWatching) {
      setIsWatching(true);
      intervalRef.current = setInterval(() => {
        setWatchedPercentage(prev => {
          const newPercentage = Math.min(prev + 0.5, 100);
          if (onProgress) {
            onProgress(newPercentage);
          }
          if (newPercentage >= 100) {
            clearInterval(intervalRef.current);
            setIsWatching(false);
          }
          return newPercentage;
        });
      }, 500); // 0.5% mỗi 0.5 giây
    }
  };

  const pauseWatching = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setIsWatching(false);
    }
  };

  // Function to convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const videoId = url.split('v=')[1];
    if (!videoId) return null;
    const ampersandPosition = videoId.indexOf('&');
    const cleanVideoId = ampersandPosition !== -1 ? videoId.substring(0, ampersandPosition) : videoId;
    return `https://www.youtube.com/embed/${cleanVideoId}?enablejsapi=1&rel=0&modestbranding=1&disablekb=1`;
  };

  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  if (!embedUrl) {
    return (
      <Alert severity="warning">
        Video không khả dụng hoặc URL không hợp lệ
      </Alert>
    );
  }

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="body2" color="text.secondary">
            Tiến độ xem: {Math.round(watchedPercentage)}%
          </Typography>
          <LinearProgress 
            variant="determinate" 
            value={watchedPercentage} 
            sx={{ flexGrow: 1, height: 8, borderRadius: 4 }}
            color={canSeek ? "success" : "primary"}
          />
          {canSeek && (
            <Chip 
              label="Có thể tua" 
              color="success" 
              size="small"
              icon={<CheckCircleIcon />}
            />
          )}
        </Stack>
      </Box>
      
      {!canSeek && (
        <Alert severity="info" sx={{ mb: 2 }}>
          <Typography variant="body2">
            📺 Bạn cần xem ít nhất 80% video để có thể tua và điều khiển video tự do. 
            <br />
            Tiến độ hiện tại: <strong>{Math.round(watchedPercentage)}%</strong>
          </Typography>
        </Alert>
      )}

      <Box
        sx={{
          position: 'relative',
          paddingBottom: '56.25%', // 16:9 aspect ratio
          height: 0,
          overflow: 'hidden',
          borderRadius: 2,
          border: !canSeek ? '3px solid #ff9800' : '1px solid #e0e0e0',
          '& iframe': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: canSeek ? 'auto' : 'none', // Disable interaction until 80%
          },
        }}
        onMouseEnter={startWatching}
        onMouseLeave={pauseWatching}
      >
        <iframe
          src={embedUrl}
          title="Video học tập"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={canSeek}
        />
        
        {!canSeek && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          >
            <Paper 
              elevation={3} 
              sx={{ 
                p: 2, 
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderRadius: 2,
                textAlign: 'center'
              }}
            >
              <Typography variant="body2" color="warning.main" fontWeight={600}>
                🔒 Chế độ học tập
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Xem {80 - Math.round(watchedPercentage)}% nữa để mở khóa
              </Typography>
            </Paper>
          </Box>
        )}
      </Box>
      
      <Box sx={{ mt: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="caption" color="text.secondary">
            💡 Di chuột vào video để bắt đầu tính tiến độ xem
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button
              size="small"
              variant={isWatching ? "contained" : "outlined"}
              color={isWatching ? "success" : "primary"}
              onClick={isWatching ? pauseWatching : startWatching}
              startIcon={isWatching ? <PauseIcon /> : <PlayArrowIcon />}
            >
              {isWatching ? "Tạm dừng" : "Bắt đầu xem"}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

// Function to convert YouTube URL to embed URL (kept for compatibility)
const getYouTubeEmbedUrl = (url) => {
  if (!url) return null;
  const videoId = url.split('v=')[1];
  if (!videoId) return null;
  const ampersandPosition = videoId.indexOf('&');
  const cleanVideoId = ampersandPosition !== -1 ? videoId.substring(0, ampersandPosition) : videoId;
  return `https://www.youtube.com/embed/${cleanVideoId}`;
};

const CourseView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [currentModuleId, setCurrentModuleId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const foundCourse = mockCourses.find((c) => c.id === id);
        if (foundCourse) {
          setCourse(foundCourse);
          // Set the current module to the first incomplete module, or the last one if all are complete
          const firstIncompleteModule = foundCourse.modules.find(m => !m.completed);
          if (firstIncompleteModule) {
            setCurrentModuleId(firstIncompleteModule.id);
          } else if (foundCourse.modules.length > 0) {
            setCurrentModuleId(foundCourse.modules[foundCourse.modules.length - 1].id); // last module if all complete
          }
        } else {
          setError('Không tìm thấy khóa học.');
        }
      } catch (err) {
        setError('Đã xảy ra lỗi khi tải khóa học.');
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  const currentModule = course ? course.modules.find(m => m.id === currentModuleId) : null;
  const currentModuleIndex = course ? course.modules.findIndex(m => m.id === currentModuleId) : -1;
  const isLastModule = course && currentModuleIndex === course.modules.length - 1;
  const isFirstModule = currentModuleIndex === 0;

  const handleNextModule = () => {
    if (course && currentModuleIndex < course.modules.length - 1) {
      setCurrentModuleId(course.modules[currentModuleIndex + 1].id);
    }
  };

  const handlePreviousModule = () => {
    if (course && currentModuleIndex > 0) {
      setCurrentModuleId(course.modules[currentModuleIndex - 1].id);
    }
  };

  const handleMarkAsComplete = () => {
    if (course && currentModule) {
      // In a real application, you would send this update to a backend.
      // For now, we simulate by updating the mockCourses data in state.
      setCourse(prevCourse => {
        const updatedModules = prevCourse.modules.map(mod =>
          mod.id === currentModule.id ? { ...mod, completed: true } : mod
        );
        return { ...prevCourse, modules: updatedModules };
      });
      // Optionally move to the next module after marking as complete
      if (!isLastModule) {
        handleNextModule();
      } else {
        alert('Bạn đã hoàn thành tất cả các module của khóa học!');
      }
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress size={60} sx={{ color: 'primary.main' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="error" sx={{ boxShadow: 3, borderRadius: 2 }}>{error}</Alert>
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<ListAltIcon />}
            onClick={() => navigate('/courses')}
            sx={{
              px: 4,
              py: 1.2,
              fontSize: '1rem',
              backgroundColor: '#2196f3',
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            Quay lại danh sách khóa học
          </Button>
        </Box>
      </Container>
    );
  }

  if (!course) {
    return (
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Alert severity="info" sx={{ boxShadow: 3, borderRadius: 2 }}>Không tìm thấy khóa học này. Vui lòng kiểm tra lại đường dẫn hoặc ID khóa học.</Alert>
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<ListAltIcon />}
            onClick={() => navigate('/courses')}
            sx={{
              px: 4,
              py: 1.2,
              fontSize: '1rem',
              backgroundColor: '#2196f3',
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            Quay lại danh sách khóa học
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <SchoolIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700} color="primary.dark">
          {course.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 900, mx: 'auto' }}>
          {course.description}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Sidebar for modules */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 2, borderRadius: 2, height: '100%', bgcolor: 'background.paper' }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
              <MenuBookIcon color="primary" />
              <Typography variant="h6" fontWeight={600}>Nội dung khóa học</Typography>
            </Stack>
            <Divider sx={{ mb: 2 }} />
            <List component="nav">
              {course.modules.map((moduleItem) => (
                <ListItem
                  key={moduleItem.id}
                  button
                  selected={currentModuleId === moduleItem.id}
                  onClick={() => setCurrentModuleId(moduleItem.id)}
                  sx={{
                    borderRadius: 1,
                    mb: 1,
                    bgcolor: moduleItem.completed ? '#e8f5e9' : 'inherit',
                    '&:hover': {
                      bgcolor: moduleItem.completed ? '#dcedc8' : '#f0f0f0',
                    },
                    opacity: moduleItem.completed ? 0.7 : 1,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 35 }}>
                    {moduleItem.completed ? (
                      <CheckCircleOutlineIcon color="success" />
                    ) : moduleItem.videoUrl ? (
                      <OndemandVideoIcon color="primary" />
                    ) : (
                      <PlayCircleFilledWhiteIcon color="action" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body2" fontWeight={500} sx={{ color: moduleItem.completed ? 'success.dark' : 'text.primary' }}>
                          {moduleItem.title}
                        </Typography>
                        {moduleItem.videoUrl && (
                          <Chip 
                            label="Video" 
                            size="small" 
                            color="primary" 
                            variant="outlined"
                            sx={{ fontSize: '0.7rem', height: '20px' }}
                          />
                        )}
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Main content area */}
        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, minHeight: '60vh', bgcolor: 'background.paper' }}>
            {currentModule ? (
              <>
                <Typography variant="h4" gutterBottom fontWeight={700} color="primary.dark" sx={{ mb: 3 }}>
                  {currentModule.title}
                </Typography>
                <Divider sx={{ mb: 3 }} />
                
                {/* Video Player Section */}
                {currentModule.videoUrl && (
                  <Box sx={{ mb: 4 }}>
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                      <PlayCircleFilledWhiteIcon color="primary" sx={{ fontSize: 28 }} />
                      <Typography variant="h6" fontWeight={600} color="primary.dark">
                        Video bài học
                      </Typography>
                    </Stack>
                    <CustomVideoPlayer 
                      videoUrl={currentModule.videoUrl}
                      onProgress={(percentage) => {
                        // Handle progress updates if needed
                        console.log(`Video progress: ${percentage}%`);
                      }}
                    />
                  </Box>
                )}

                {/* Text Content Section */}
                <Box sx={{ lineHeight: 1.8 }}>
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                    <MenuBookIcon color="primary" sx={{ fontSize: 24 }} />
                    <Typography variant="h6" fontWeight={600} color="primary.dark">
                      Nội dung bài học
                    </Typography>
                  </Stack>
                  {currentModule.content}
                </Box>
                <Stack direction="row" justifyContent="space-between" sx={{ mt: 4, pt: 2, borderTop: '1px solid #eee' }}>
                  <Button
                    variant="outlined"
                    startIcon={<ChevronLeftIcon />}
                    onClick={handlePreviousModule}
                    disabled={isFirstModule}
                    sx={{ px: 3, py: 1.2 }}
                  >
                    Bài học trước
                  </Button>
                  {!currentModule.completed && (
                    <Button
                      variant="contained"
                      startIcon={<CheckCircleIcon />}
                      onClick={handleMarkAsComplete}
                      sx={{
                        backgroundColor: '#4caf50',
                        '&:hover': {
                          backgroundColor: '#388e3c',
                        },
                        px: 3,
                        py: 1.2,
                      }}
                    >
                      Đánh dấu đã hoàn thành
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    endIcon={<ChevronRightIcon />}
                    onClick={handleNextModule}
                    disabled={isLastModule}
                    sx={{
                      backgroundColor: '#2196f3',
                      '&:hover': {
                        backgroundColor: '#1976d2',
                      },
                      px: 3,
                      py: 1.2,
                    }}
                  >
                    Bài học tiếp theo
                  </Button>
                </Stack>
              </>
            ) : (
              <Box sx={{ textAlign: 'center', py: 5 }}>
                <Typography variant="h5" color="text.secondary">Vui lòng chọn một module để bắt đầu.</Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CourseView; 