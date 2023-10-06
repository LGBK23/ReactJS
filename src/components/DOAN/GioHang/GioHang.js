import { Table } from "reactstrap";
function GioHang() {
    return (
        <>
            <div className="body-giohang">
            <Table >
                <thead>
                    <tr>
                        <th>
                            SẢN PHẨM
                        </th>
                        <th>
                            ĐƠN GIÁ
                        </th>
                        <th>
                            SỐ LƯỢNG
                        </th>
                        <th>
                            THÀNH TIỀN
                        </th>
                        <th>
                            #
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <th scope="row">
        
                        </th> */}
                        <td>
                            Tên sản phẩm
                        </td>
                        <td>
                            10.000
                        </td>
                        <td>
                            2
                        </td>
                        <td>
                            20.000
                        </td>
                        <td>
                            <a href="#">Xóa</a>
                            <a>/</a>
                            <a href="#">Cập nhật</a>
                        </td>
                    </tr>

                </tbody>
            </Table>
            
            <div className="nutTTMHvaTT row">
                <button className="nuttieptucmuahang col-sm-2" href="#">Tiếp tục mua hàng</button>
                <div className="col-sm-6"></div>
                <button className="nutthanhtoan col-sm-2" href="#">Thanh toán</button   >
            </div>
            </div>
        </>
    );
}
export default GioHang;