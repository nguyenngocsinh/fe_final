import { Link } from 'react-router-dom'
import '../css/function-list.css'

const NavBar = () => {
  return (
      <ul className="function-list">
        <li className="function-item"><Link to={'/#'}>Tiếp nhận học sinh</Link></li>
        <li className="function-item"><Link to={'/#'}>Lập danh sách lớp</Link></li>
        <li className="function-item"><Link to={'/#'}>Tra cứu học sinh</Link></li>
        <li className="function-item"><Link to={'/subject-score'}>Nhận bảng điểm môn</Link></li>
        <li className="function-item"><Link to={'/category-report'}>Lập báo cáo tổng kết</Link></li>
      </ul>
  )
}

export default NavBar