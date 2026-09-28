import { useMemo, useState } from 'react'
import { domains, videos } from './videos'
import './App.css'

function App() {
  const [activeDomain, setActiveDomain] = useState(domains[0].key)
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(
    () => videos.filter((v) => v.domain === activeDomain),
    [activeDomain]
  )

  const activeDomainInfo = domains.find((d) => d.key === activeDomain)

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-top">
          <div>
            <h1>체육</h1>
            <p className="subtitle">체육 교과 5개 영역 영상 자료실</p>
          </div>
          <div className="stats">
            <span>{filtered.length}개 영상</span>
          </div>
        </div>

        <div className="tabs">
          {domains.map((d) => (
            <button
              key={d.key}
              className={`tab${activeDomain === d.key ? ' active' : ''}`}
              style={activeDomain === d.key ? { background: d.color, borderColor: d.color } : {}}
              onClick={() => setActiveDomain(d.key)}
            >
              {d.label}
            </button>
          ))}
        </div>
      </header>

      <div className="grid">
        {filtered.map((v) => (
          <div key={v.id} className="card" onClick={() => setSelected(v)}>
            <div className="thumb" style={{ background: `linear-gradient(135deg, ${activeDomainInfo.color}33, #1a1a22)` }}>
              <span className="play" style={{ background: activeDomainInfo.color }}>▶</span>
            </div>
            <div className="card-body">
              <span className="tag" style={{ color: activeDomainInfo.color }}>{v.domain}{v.grade ? ` · ${v.grade}` : ''}</span>
              <h3>{v.title}</h3>
              <p className="meta">{v.description}</p>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <p className="status-text">이 영역에는 아직 등록된 영상이 없어요.</p>}
      </div>

      {selected && (
        <div className="player-modal" onClick={() => setSelected(null)}>
          <div className="player-inner" onClick={(e) => e.stopPropagation()}>
            <span className="tag" style={{ color: activeDomainInfo.color }}>{selected.domain}</span>
            <h2>{selected.title}</h2>
            <iframe
              width="100%"
              height="360"
              src={`https://www.youtube.com/embed/${selected.youtubeId}?start=${selected.startSec}&autoplay=1`}
              title={selected.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <p className="desc">{selected.description}</p>
            <button onClick={() => setSelected(null)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
