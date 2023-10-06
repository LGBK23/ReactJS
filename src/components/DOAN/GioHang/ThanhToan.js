import { Table } from "reactstrap";
function ThanhToan()
{
    return(
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
                        
                    </tr>

                </tbody>
            </Table>
            <div className="row">
                <h4 className="col-sm-6">Thông tin người nhận hàng:</h4>
                <h4 className="col-sm-6">Hình thức thanh toán:</h4>
            </div>
            <div className="row">
                <div className="col-sm-9"></div>
                <button className="nutthanhtoanfromthanhtoan col-sm-2" href="#">Thanh toán</button   >
            </div>
            
            
            </div>
        </>
    );
}
export default ThanhToan;