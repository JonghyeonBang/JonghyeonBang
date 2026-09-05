# Linux 홈페이지 작업

기존 Minimal Mistakes / Jekyll 프로젝트입니다. Git 이력과 원래 GitHub Pages 배포 설정을 보존했습니다.

## 로컬 실행

이 폴더에서 다음 명령을 실행합니다. 현재 컴퓨터용 Ruby 3.2.9와 잠금 파일에 맞는 의존성은 `vendor/ruby`에 설치되어 있습니다.

```bash
./scripts/site serve --host 127.0.0.1 --port 4000
```

주소: http://127.0.0.1:4000/JonghyeonBang/

```bash
./scripts/site build
```

다른 Linux 컴퓨터에서 저장소를 복제했다면 Ruby 3.2와 Bundler 2.5.21을 설치한 뒤 `bundle install`을 실행합니다. `vendor`는 Git에 포함하지 않습니다.

## 내용 수정

- 소개: `_includes/about.md`
- 홈 제목과 연구 분야: `_data/home.yml`
- 논문: `_publications/*.md` (연도·제목·학술지·원문 링크)
- 프로젝트와 소식: `_posts/*.md` (기존 주소 유지)
- 메뉴: `_data/navigation.yml`
- 블로그 준비 구조: `_pages/blog.md`, `_layouts/blog-issue.html`

현재 참고 사이트의 메뉴에는 Blog가 없어 메뉴에서 제외했습니다. `/blog/`에는 빈 목록과 이슈 뷰어 구조가 준비되어 있습니다. `_blog_issues`에 `layout: blog-issue`, `title`, `date`, `pdf` 또는 `spreads`가 있는 문서를 추가할 수 있습니다. `spreads` 항목은 `image`, `alt`, 선택적 `caption`으로 구성됩니다.

GitHub Pages용 `baseurl`과 워크플로는 보존했습니다. 별도 비공개 확인용 사이트를 빌드할 때만 `--baseurl '' --destination dist`를 사용합니다. GitHub에 push하면 기존 워크플로가 실행될 수 있습니다.
