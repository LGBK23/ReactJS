function DangKy()
{
    return(
        <>
        <div className="formDKDN">
    <div id="wrapper">
        <form action="XLDangky" id="form-login" method="post">
            
            <h1 class="form-heading">ĐĂNG KÝ</h1>
            <div class="form-group">
                <i class="far fa-user"></i>
                <input type="text" class="form-input" name="Ten" placeholder="Họ Tên"/>
            </div>
            <div class="form-group">
                <i class="far fa-user"></i>
                <input type="text" class="form-input" name="email" placeholder="Email"/>
            </div>
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
            <div class="form-group">
                <i class="fas fa-key"></i>
                <input type="password" class="form-input" name="XNMK" placeholder="Xác nhận mật khẩu"/>
                <div id="eye">
                    <i class="far fa-eye"></i>
                </div>
            </div>
            <input type="submit" value="Đăng ký" class="form-submit"/>
            <a href="#">Đăng nhập</a>
        </form>
    </div>
    </div>

        </>
    );
}
export default DangKy;