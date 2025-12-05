-- 얼리 액세스 이메일을 저장할 테이블 생성
CREATE TABLE IF NOT EXISTS early_access_emails (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- 인덱스 추가 (이메일 중복 체크 및 조회 성능 향상)
  CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- 이메일 컬럼에 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_early_access_emails_email ON early_access_emails(email);

-- 생성일 기준 인덱스 (최근 가입자 조회용)
CREATE INDEX IF NOT EXISTS idx_early_access_emails_created_at ON early_access_emails(created_at DESC);

-- Row Level Security (RLS) 활성화
ALTER TABLE early_access_emails ENABLE ROW LEVEL SECURITY;

-- 공개 삽입 정책 (누구나 이메일 추가 가능)
CREATE POLICY "Anyone can insert email" ON early_access_emails
  FOR INSERT
  TO public
  WITH CHECK (true);

-- 관리자만 조회 가능 (보안을 위해 일반 사용자는 조회 불가)
-- 필요시 anon 역할로 변경하여 공개 조회 허용 가능
CREATE POLICY "Only authenticated users can view emails" ON early_access_emails
  FOR SELECT
  TO authenticated
  USING (true);

-- 코멘트 추가
COMMENT ON TABLE early_access_emails IS '얼리 액세스 신청 이메일 저장 테이블';
COMMENT ON COLUMN early_access_emails.email IS '사용자가 입력한 이메일 주소 (중복 불가)';
COMMENT ON COLUMN early_access_emails.created_at IS '이메일 등록 일시';
