# 🚀 Hướng Dẫn Sử Dụng GitHub Cơ Bản (Chi Tiết)

---

## ⚙️ 1. Cài đặt Git

- Tải và cài đặt Git từ: [git-scm.com/downloads](https://git-scm.com/downloads)
- Kiểm tra Git đã cài chưa bằng lệnh:
  ```bash
  git --version
  ```

---

## 🛠️ 2. Cấu hình Git lần đầu

- Cấu hình tên và email để Git gắn vào commit:
  ```bash
  git config --global user.name "Tên của bạn"
  git config --global user.email "email@example.com"
  ```
- Kiểm tra cấu hình:
  ```bash
  git config --list
  ```

---

## 📁 3. Tạo repository mới trên GitHub

- Đăng nhập GitHub: [github.com](https://github.com)
- Nhấn **New repository** (📦)
- Đặt tên repo, chọn Public hoặc Private, rồi nhấn **Create repository**

---

## 📥 4. Clone repository về máy

- Lấy bản sao repository về máy:
  ```bash
  git clone https://github.com/username/repository.git
  cd repository
  ```

---

## 📝 5. Các thao tác làm việc cơ bản

- Kiểm tra trạng thái các file thay đổi so với bản commit gần nhất:
  ```bash
  git status
  ```

- Thêm file vào vùng staging (đánh dấu sẵn sàng commit):
  ```bash
  git add <tên_file>
  ```
  Hoặc thêm tất cả file đã thay đổi:
  ```bash
  git add .
  ```

- Commit để lưu thay đổi vào lịch sử git với lời nhắn mô tả:
  ```bash
  git commit -m "Mô tả thay đổi"
  ```

- Đẩy commit lên GitHub (nhánh chính thường là main hoặc master):
  ```bash
  git push origin main
  ```

---

## 🌿 6. Tạo và chuyển nhánh (branch)

- Tạo nhánh mới và chuyển sang làm việc trên nhánh đó:
  ```bash
  git checkout -b ten-nhanh
  ```

- Chuyển về nhánh main:
  ```bash
  git checkout main
  ```

- Xem danh sách các nhánh có trong repo:
  ```bash
  git branch
  ```

- Xóa nhánh đã không dùng nữa (lưu ý phải merge hoặc không có thay đổi chưa commit):
  ```bash
  git branch -d ten-nhanh
  ```

---

## 🔀 7. Hợp nhất nhánh (merge)

- Chuyển về nhánh nhận (ví dụ main):
  ```bash
  git checkout main
  ```

- Merge nhánh muốn hợp nhất vào nhánh hiện tại:
  ```bash
  git merge ten-nhanh
  ```

- Nếu có xung đột (conflict), sửa các file bị xung đột, sau đó:
  ```bash
  git add <file>
  git commit
  ```

---

## 🔄 8. Cập nhật và đồng bộ với remote

- Lấy thay đổi mới nhất từ remote về và tự động merge vào nhánh hiện tại:
  ```bash
  git pull origin main
  ```

- Nếu muốn chỉ tải dữ liệu mới mà không merge, dùng fetch:
  ```bash
  git fetch origin
  ```
  Sau đó có thể xem các nhánh remote:
  ```bash
  git branch -r
  ```

---

## 🧰 9. Quản lý thay đổi tạm thời với stash

- Lưu các thay đổi chưa commit tạm thời để chuyển nhánh hoặc làm việc khác:
  ```bash
  git stash
  ```

- Xem danh sách các stash đã lưu:
  ```bash
  git stash list
  ```

- Lấy lại thay đổi đã stash:
  ```bash
  git stash apply
  ```

---

## 🔄 10. Một số lệnh sửa đổi và phục hồi

- Quay lại thay đổi của file chưa commit về trạng thái cuối cùng trên Git:
  ```bash
  git checkout -- <tên_file>
  ```

- Hoàn tác commit cuối cùng nhưng vẫn giữ thay đổi trong staging area:
  ```bash
  git reset --soft HEAD~1
  ```

- Hoàn tác commit cuối cùng và bỏ thay đổi đó:
  ```bash
  git reset --hard HEAD~1
  ```

---

## 📚 11. Xem lịch sử và so sánh

- Xem lịch sử commit chi tiết:
  ```bash
  git log
  ```

- Xem sự khác nhau giữa các thay đổi chưa commit:
  ```bash
  git diff
  ```

---

## 🔗 12. Quản lý remote

- Xem các remote hiện có:
  ```bash
  git remote -v
  ```

- Thêm remote mới:
  ```bash
  git remote add origin https://github.com/username/repository.git
  ```

- Xóa remote:
  ```bash
  git remote remove origin
  ```

---

## 🔗 13. Tham khảo

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/en)

---

✨ *Chúc bạn thành công với Git & GitHub!*
