function DangNhap()
{
    return(
        <>
        <div className="formDKDN">
    <div id="wrapper">
        <form action="DangNhap" id="form-login" method="get">
            <h1 class="form-heading">ĐĂNG NHẬP</h1>
            <div class="form-group">
                <i class="far fa-user"></i>
                <input type="text" class="form-input" name="TenTK" placeholder="Tên đăng nhập"/>
            </div>
            <div class="form-group">
                <i class="fas fa-key"></i>
                <input type="password" class="form-input" name="MK" placeholder="Mật khẩu"/>
                <div id="eye">
                    <i class="far fa-eye"></i>
                </div>
            </div>
            <input type="submit" value="Đăng nhập" class="form-submit"/>
            <a href="#">Đăng ký tài khoản</a>
        </form>
    </div>
     </div>

        </>
    );
}
export default DangNhap;