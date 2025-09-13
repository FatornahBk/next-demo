// app/profile/page.tsx

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default function ProfilePage() {
  // mock profile data (คนเดียว)
  const data = {
    id: 101,
    name: 'Fatornah Bukem',
    email: 'fatornah030bukem@gmail.com',
    bio: 'Frontend Developer, loves React and Next.js',
    address: '207/4 ม. 1 ต.ท่าเรือ อ.​ท่าแพ จ.สตูล 91150',// เปลี่ยนเป็นลิงก์รูปจริงได้
  };

  return (
    <section style={{ padding: '16px' }}>
      <h1>👤 Profile</h1>

      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          gap: '16px',
          alignItems: 'flex-start',
          maxWidth: '480px',
        }}
      >

        {/* ข้อมูลโปรไฟล์ */}
        <div>
          <h2>{data.name}</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '8px' }}>
            <li><b>ID:</b> {data.id}</li>
            <li><b>Email:</b> {data.email}</li>
            {data.address && <li><b>Address:</b> {data.address}</li>}
            {data.bio && <li><b>About:</b> {data.bio}</li>}
          </ul>
        </div>
      </div>

    </section>
  );
}