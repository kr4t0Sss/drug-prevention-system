import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Button,
  Alert,
} from '@mui/material';
import {
  Download as DownloadIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '../../contexts/AssessmentContext';

const getRiskLevelColor = (riskLevel) => {
  switch (riskLevel.toLowerCase()) {
    case 'thấp':
    case 'nguy cơ thấp':
      return 'success';
    case 'trung bình':
    case 'nguy cơ trung bình':
      return 'warning';
    case 'cao':
    case 'nguy cơ cao':
      return 'error';
    default:
      return 'default';
  }
};

const AssessmentHistory = () => {
  const navigate = useNavigate();
  const { results, deleteResult } = useAssessment();

  const handleDownload = (result) => {
    // Tạo phiên bản báo cáo đánh giá dưới dạng văn bản
    const content = `
Báo cáo đánh giá
Loại: ${result.type}
Ngày: ${result.date}
Điểm số: ${result.score}
Mức độ rủi ro: ${result.riskLevel}

Khuyến nghị:
${result.recommendations.map(rec => `- ${rec}`).join('\n')}
    `.trim();

    // Tạo và kích hoạt tải xuống
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `assessment-${result.type.toLowerCase()}-${result.date}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (results.length === 0) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          Lịch sử đánh giá
        </Typography>
        <Alert severity="info" sx={{ mt: 2 }}>
          Bạn chưa thực hiện bài đánh giá nào. Hãy thực hiện một bài đánh giá để bắt đầu theo dõi tiến độ của mình.
        </Alert>
        <Button
          variant="contained"
          onClick={() => navigate('/assessment')}
          sx={{ mt: 3 }}
        >
          Thực hiện đánh giá
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Lịch sử đánh giá
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Xem và quản lý kết quả các bài đánh giá trước đây của bạn. Bạn có thể tải xuống báo cáo để chia sẻ với các nhà cung cấp dịch vụ chăm sóc sức khỏe.
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ngày</TableCell>
              <TableCell>Loại</TableCell>
              <TableCell>Điểm số</TableCell>
              <TableCell>Mức độ rủi ro</TableCell>
              <TableCell align="right">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.id}>
                <TableCell>{new Date(result.date).toLocaleDateString()}</TableCell>
                <TableCell>{result.type}</TableCell>
                <TableCell>{result.score}</TableCell>
                <TableCell>
                  <Chip
                    label={result.riskLevel}
                    color={getRiskLevelColor(result.riskLevel)}
                    size="small"
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => handleDownload(result)}
                    title="Tải xuống báo cáo"
                  >
                    <DownloadIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => deleteResult(result.id)}
                    title="Xóa kết quả"
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Typography variant="h6" gutterBottom>
          Về lịch sử đánh giá của bạn
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lịch sử này hiển thị tất cả các bài đánh giá bạn đã thực hiện. Đánh giá thường xuyên có thể giúp theo dõi sự thay đổi
          trong mức độ rủi ro của bạn và hiệu quả của các chiến lược phòng ngừa. Bạn có thể tải xuống báo cáo
          để chia sẻ với các nhà cung cấp dịch vụ chăm sóc sức khỏe hoặc xóa các kết quả mà bạn không muốn giữ nữa.
        </Typography>
      </Box>
    </Box>
  );
};

export default AssessmentHistory; 