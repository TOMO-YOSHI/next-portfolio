import React, { useState, useEffect } from 'react';
import { Work } from '../types/work'

export default function ModalContentsWork(selectedWork: any) {
  const [work, setWork] = useState<Work | null>(null)
  console.log(work)

  useEffect(() => {
    setWork(selectedWork);
  }, [selectedWork])

  return (
    <div>
      <h2>{work?.name}</h2>
      <div
        id="visual_div"
        className={ work?.youtubeIframe ? "video-container": null}>
        {work?.youtubeIframe ? work?.youtubeIframe :
          // `<p>Image</p>
          //   <img src="${work?.image.url}" alt="${work?.image.alt}">`
          <p>{work?.id}</p>
        }
      </div>
      <div className="each_work_description">
        <p className="orange">Core technology</p>
        <ul>
          {work?.coreTechnology}
        </ul>

        <p className="about_this_work">About this Work</p>
        <p>{work?.description}</p>

        <div className="work_links">
          {
            work?.webPageUrl ? `<p><a href="${work?.webPageUrl}" target="_blank">Visit the Actual Web Page</a></p>` : ""
          }
          {
            work?.githubUrl ? `<p><a href="${work?.githubUrl}" target="_blank">Look into the Code (Go to GitHub)</a></p>`
              : `<p className="orange">Sorry Github is private !</p>`
          }
        </div>
      </div>
    </div>
  )
}
