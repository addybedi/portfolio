import Netapp from "../assets/netapp";
import CapitalMindLogo from "../assets/CapitalMindLogo";
import KnotchLogo from "../assets/KnotchLogo";
import VILLogo from "../assets/vil.png";
import QboLogo from "../assets/Qbo.png";

export const projects = [
  {
    live: "https://unscrambl.com/product/qbo-overview/",
    logo: (
      <img
        src={QboLogo}
        height={24}
        width={24}
        className=" h-auto object-contain"
      />
    ),
    title: "Qbo by Unscrambl",
    description:
      "Maintained and enhanced full-stack voice/text-based analytics app using NestJS, MariaDB, and styled TSX frontend components. Implemented OAuth, data exporting, and unit/E2E testing.",
    tech: [
      "NestJS",
      "React",
      "TypeScript",
      "MariaDB",
      "Bulma CSS",
      "Jest",
      "Mocha",
      "Chai",
    ],
  },
  {
    logo: <CapitalMindLogo />,

    title: "CapitalMind",
    description:
      "Developed an SEO-optimized investment platform using Next.js and Tailwind CSS. Integrated Prisma ORM for real-time data and enhanced performance with SSR.",
    tech: ["Next.js", "Prisma ORM", "MySQL", "Tailwind CSS", "ButterCMS"],
    live: "https://premium.capitalmind.in/",
  },
  {
    logo: <Netapp />,
    title: "Spot Connet by NetApp",
    description:
      "Built frontend components using Figma designs for a low-code workflow automation platform. Released builds through Jenkins and optimized app performance.",
    tech: [
      "React",
      "Redux-thunk",
      "Formik",
      "Yup",
      "React Flow",
      "TypeScript",
      "Webpack",
      "Heroku",
    ],
  },
  {
    live: "https://www.knotch.com/platform/knotch-one",
    logo: <KnotchLogo />,
    title: "Knotch One",
    description:
      "Migrated Angular modules to React and built scalable UI components using styled-components and React Tables. Integrated GraphQL and ensured testing and code quality.",
    tech: ["React", "React Tables", "Apollo", "GraphQL", "styled-components"],
  },
  {
    live: "https://startree.ai/",
    logo: (
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAMFBMVEVHcEwAJlQAJlQAJlQAJlQAFVY2Pk+ihTwABVfksyjQpS//yxv/xh/BmzRuYUdvYkdHEzi4AAAABXRSTlMATNr/S+GdNLgAAACdSURBVHgBY2BUNoYDIwEGYWMkYMIAkkRIMxijABg3GIVrVorC7VyKzDWtRuGa7UbhxpxG5lrcRuHG7Tm9IjQ0GMa1PnNm7t27V6Fci9VnzpzevbsUyg3fvXvPmTM7m6Hc2Lt3b545cxhmlGloaNee01+RHBm1Z28zCveoMTJ3dzIKd3swCncGin/Dk1G4pvCwQgFoAYse7CzIkeIAAFOba8sMF6tMAAAAAElFTkSuQmCC"
        style={{ height: "26px", width: "26px" }}
        alt=""
      />
    ),
    title: "StarTree",
    description:
      "Enhanced frontend performance and maintainability using MUI and React components, added functional modules, and implemented Playwright-based E2E testing.",
    tech: ["React", "React Hook Form", "Material UI", "Playwright"],
  },
  {
    live: "https://www.manulife.ca/personal/insurance/our-products.html",
    logo: (
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAMAAAC7faEHAAAAllBMVEUAp1kAp1gAp1oAqFkAplkAqFgAploAplj///8AqFoAp1cAp1YAplcAqVkAplYAp1sAqFcAplvg7+YAk0AAmUjw+fYQmVAkq2QAnT0AoFFgvY4+s3cBnEx3yqArsW8ZolletICj1rU1rGnN6NZUs3oAn0fY7eAAlzcOmkwAmTZes4Yoq1/k8OoTmVMkp2KZ0q4Aq1GMyad9GZgZAAADMmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6SXB0YzR4bXBFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgZXhpZjpEYXRlVGltZU9yaWdpbmFsPSIyMDI1LTA2LTA1VDIzOjM2OjU4KzAwOjAwIiBJcHRjNHhtcEV4dDpEaWdpdGFsU291cmNlRmlsZVR5cGU9Imh0dHA6Ly9jdi5pcHRjLm9yZy9uZXdzY29kZXMvZGlnaXRhbHNvdXJjZXR5cGUvY29tcG9zaXRlV2l0aFRyYWluZWRBbGdvcml0aG1pY01lZGlhIiBJcHRjNHhtcEV4dDpEaWdpdGFsU291cmNlVHlwZT0iaHR0cDovL2N2LmlwdGMub3JnL25ld3Njb2Rlcy9kaWdpdGFsc291cmNldHlwZS9jb21wb3NpdGVXaXRoVHJhaW5lZEFsZ29yaXRobWljTWVkaWEiIHBob3Rvc2hvcDpDcmVkaXQ9IkVkaXRlZCB3aXRoIEdvb2dsZSBBSSIgcGhvdG9zaG9wOkRhdGVDcmVhdGVkPSIyMDI1LTA2LTA1VDIzOjM2OjU4KzAwOjAwIi8+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgPD94cGFja2V0IGVuZD0idyI/PvYYA4oAAANXSURBVDiNbZQJc9s2EEYBLEAQJ8FIPmTHidvYcZvUtvr//1zfQuNpJ1PqooiHPb7dhUlLsN776J1PMcZl8cY5v+/6rBpjJSRjxBhnTOSv5V5XrBUe8mDkHG2wObAWw2Z2yOi95WcxcXEuwXkjocZoUwhw/IXykR1cagWX2LfBy+WByAjBincbzkwMQ4RFIsCY2GwvkSRoMGOqxa93us/MXKI4M9ck2YpvzDWRUPJudjIkKmKMxqszLAthifq1uWYxttrdbMpp5D7aiEvPfjFBHC/l1HqMJLl47yza+KoJBaKShH18OHZGVLG1ql+37LAk4U0yBIhrtxiX0lRElY1euQ1uWchnUxNEbwj4orZY6kRKUTluF72Q2J/IspWTJ8t+ig2b3kmMlGCfxvjGUTze3ZfRPz986e309eGmJCJFY0s0uwYHt1P9w+P69FwOv62/l+frb+trF/F+2XylqPuMzu+bS8endX26Pb6v61fFPl13UtEEu/bBsqCN21Lqx+9wLzfrevX28rgqhz/EynnWzWo9ti31Pz7B/XlztV79fPmhXKXcfkHpIdjTxlx29z9clxbI11mbps6Qe5I6uduf/3KlJTIQqVOX7UO8Czft3V440X6k55pXjmuq91/uIw9HX9C4qsui0sH1X7lX/DqvflFH4wNCl/oL99drFWbNb1Kz1T6gAdK+JX89uTe4dvFb8BnpnBGq1k2DdRfu2+fz27q+395SmsejuJ0uN5Kz5qG1YNO2vK7fr5/P9+v74fx8t/44FNHwZr8qR2mh3La//X19HOPLw6Gcz/d3h8EUEp9LJo84ddFW3TaJx1NorR5PY9BcTGvQoWFeaoHb6FK/bXSw2CStNco5Bo3K+GrfM0e906naf9QjNdEJUq7Na7SgQxTZXyuVY86ZIiSEFJnAxEKmnzjLJNgaiqZDUmY6ta3JaAM4hWEL7m2OnFk9Zz16GCqOHcaXyDgJNLxgS4fLlttcuDMB8TggKI3loV4E1UeuvZTSax7ZjA7HXHMAGT0hbS5ZQdawAFb4GiSs9nTofYwVDhs1z+Xp6gPV36bGlIt1vqKvtfeqQMm41X26K5gFI1jrusxHr8K71DJDJNUYC8fTvptgP5Rtqh+Cc0hPzTldaToZefkHtog5fe5GRXcAAAAASUVORK5CYII="
        style={{ height: "26px", width: "26px" }}
        alt=""
      />
    ),
    title: "Manulife",
    description:
      "Modernized a legacy on-premise app by developing cloud-based frontend using Next.js, integrating custom UI libraries and migrating .NET/Angular systems to React. Implemented tracking, claims, and input portals with performance optimization and Azure AD authentication.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "styled-components",
      "Jest",
      "React Testing Library",
      "Azure AD",
    ],
  },
  {
    live: "https://www.onebyzero.ai/generative-ai",
    logo: (
      <img
        src="data:image/webp;base64,UklGRioDAABXRUJQVlA4WAoAAAAQAAAAJgAAJgAAQUxQSFMBAAARkBxJkiM53UfUoMD/uJLggBz8B0k4hxRLIx5VXT0GCSJiAnpr7eju+c89uYIIqux/v7o77i198HFjFdMkrj+c99Z6u/tlHZLy75vW+tkvarjk7/N29M5ZMkq+O7xeVQCrUNjcPhYlE4cYUQk++2oOGYGAivn3XYBMMREn946zpQEVFoKCYchUBByDCgIoBBZRKSgKSDADFQTFMSBGIAjGMETF8UgVBgSsk0s0YpyKSC5INAUpCQImGsB5UCU3x0hAZUR0TAUwzRRVFCO5IIGMzIrTKKIEHEICjFBFFREV/8NQBIUCGQSgAqYApjhOCI4sDMkAMTJwFlQwYkTdf58BUIwkhE9PCEg0B0qqj+82KhZx0c3V0TsooBBg4u1hP/ltiimqYBX/nLXWrv8kkizJ3/sWT1+vpwAl27x/2FrrrfWjyxf/9qiIiioI7L4+uj7urXcAVlA4ILABAAAwCQCdASonACcAPpEqpFIloaWlk5CwEgllAND7AbgKEAmlltWZ9/lX2Bv41/Tf+Sg3/xvj8iJ659QmX8oHfWnhIo/IEgiylg3UjYnFhiTeYwZIAP3Lbt79237Lm7VeU4L0vxvCJfLlaLawLkhwN/rMjP1r/1af89gH/Zfzllmavz/ZzCy+vlF8glv1f7QKofrPka/tx//k0n/H69RXVduOzFOdvkMwm1HlupTrw1X4knFuhGQ7RNlSIgmxFQgAMjQwg7MNWmsXJseWgiq0xrSD0cYmKe+6d/zoPmh6pe/lMf/f/zWjbJwgmF0gjJHtekpAIp+mQ+q6pbF4AHVCJvtsRDNNozTtWy387mI3ZTb3lvCtWkiLOpDIcGQXkmNP/mWregK0Ag9TRBUKSSxti03YjQxFX0gXVeEx42KZJU3tFrSMGZ9xAJ4w4NpsbbLiOe35IMHe2XRCodJfTjL1ZL/MjIeAto1PhfROXzWxIZiq4HcVJbnIB3rJbQA92tP8Igw3H7TxE6PWFc8VO0t4paksFt03UdpFiUzdWb0NlnJiElGrnQlvqkks9KhPn3Rm3AA="
        style={{ height: "26px", width: "26px" }}
        alt=""
      />
    ),
    title: "OneByZero",
    description:
      "Developed a modular admin UI with Chakra UI, nested routes, and Role-Based Access Control (RBAC) using React Router and Redux.",
    tech: ["React", "Chakra UI", "Redux"],
  },
  {
    live: "https://rozgar.com/",
    logo: (
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAMAAAC7faEHAAAAolBMVEXpHCnpHSnoHCjpHCjoHCn////qHCnqHCjoGyjpHSjoHSnqHSnpGyvsGifmHynlISnzbXP++fj78fDdAADpGCPjGyLlERzgAg/iAAThAxDtKTDxa23zaW/yXmXvREzoEBz6zc75nJ7xQkbuenv2qKb96+v1Z2b6tLXpLTTxGh72i4381tP2vb7pAA/yhYXxPUD94eH8xMLXAQ3gW13yMz7uRk4omcfWAAADMmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6SXB0YzR4bXBFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgZXhpZjpEYXRlVGltZU9yaWdpbmFsPSIyMDI1LTA2LTA2VDAwOjU5OjIwKzAwOjAwIiBJcHRjNHhtcEV4dDpEaWdpdGFsU291cmNlRmlsZVR5cGU9Imh0dHA6Ly9jdi5pcHRjLm9yZy9uZXdzY29kZXMvZGlnaXRhbHNvdXJjZXR5cGUvY29tcG9zaXRlV2l0aFRyYWluZWRBbGdvcml0aG1pY01lZGlhIiBJcHRjNHhtcEV4dDpEaWdpdGFsU291cmNlVHlwZT0iaHR0cDovL2N2LmlwdGMub3JnL25ld3Njb2Rlcy9kaWdpdGFsc291cmNldHlwZS9jb21wb3NpdGVXaXRoVHJhaW5lZEFsZ29yaXRobWljTWVkaWEiIHBob3Rvc2hvcDpDcmVkaXQ9IkVkaXRlZCB3aXRoIEdvb2dsZSBBSSIgcGhvdG9zaG9wOkRhdGVDcmVhdGVkPSIyMDI1LTA2LTA2VDAwOjU5OjIwKzAwOjAwIi8+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgPD94cGFja2V0IGVuZD0idyI/PjE7R9cAAANPSURBVDiNTVULWxs3EFxp9/SWDUGGUEKOQNLg4IZA2v//1zqjg37dzz580mj2odlF9vvdznuffcEjZ58PfMulYAlWzCwfDgfZwXw2UUeg1+ytYFOSy9WZL7kYz0nbtVail+iwX4r4Ig7YlJzLDqejCgmAw673eBU/XRW6E8mq4mJ027qKgddMNTvCbAaHdQVFBRlwcJSjtNKKF/WOOOEZUGKlFKdaNQOKjS7NGqPlJlJjhLL9MJ/ApjHHuOF2VhA3kdhtbwZnKZnz4mpQhC84C8cumVdJh8tpg8vFBBZdRTCxiyVvjnnGGMfVxUfa1fWlooIAKmCoC3BAaylqPkj/4+aM9un2c18nJ5Klwx35xFD2oFFcv1/e7e6sD00JiwK8z0Ma6FVDDaH2+w//AT98aSMxQHFuxtc8i8aFWoE7f7g5e/j6bVnOz9YYGrPExbMuuBLek7Q2cYcL5PIngN/XgdIK4/MJ8WmCOnC91gJxj3+t6/H4dVmeBoISqKCJV/DNAxJQ8HfcWI8/Jk5jDGa8X94HDQ6CqxvuCDsty8s6JIRgTlMR4gp9Gk7W5zdcB93y8zoCF1MIfuYLfYknpXTglrvT6fQLsJf9KhZErTXLcfMLASBfN3GbnX9/fB1BNmtp4sRR0SEI81h+PT3h+XQADEVBwpH3AhzJoB0WeuZx8fobfLfHjiQghCzRG+qCIkJTXLIN9/Hq8g6EdQCn+FJ/1AtawXssWInEPV+v6ydE+LD2iOasLM3UnzmYQH2uT9w6xngB4d8jss7oINOpUwZR/4/r6+35svwYQKGAIcw8IECHbobSfL/H9vPa+2i4j2+fR48MMCRjvompQ4GW++Pp7uURuL7+g2rfjA62yAyRL+9C0ddQdF+vYGAB8Or19bJHxkcVAhfUoUs1ozNzRq8dIrcHu06pg1Cro65mg0SIO8TiIhIiDCT4U8GmQaoyXzSy8xh3kD0m1Ewc0FrD9IlHYR91lBkAlhp6BC67N0KJmyn7Qrb+xW/OLqAwmComCpnCdOoylDV1Khw8iBFDISOGGSu8Vtwale6MCuycf/y4TYYFU5jDCEepNtvt2vx0mVvc5FwtHG/l7X378mW/i7J/N7zxg8d88/gvgMe2tt//C1wCOd+2HB5UAAAAAElFTkSuQmCC"
        style={{ height: "26px", width: "26px" }}
        alt=""
      />
    ),
    title: "Rozgar.com",
    description:
      "Maintained full-stack job portal with MongoDB and Express.js, built custom React components with Bootstrap, integrated job scrapers, and auto-complete with Redis.",
    tech: [
      "React",
      "MongoDB",
      "Redis",
      "ElasticSearch",
      "Bootstrap",
      "TypeScript",
      "AWS S3",
    ],
  },

  {
    live: "https://campus.rozgar.com/",
    logo: (
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAMAAAC7faEHAAAAolBMVEXpHCnpHSnoHCjpHCjoHCn////qHCnqHCjoGyjpHSjoHSnqHSnpGyvsGifmHynlISnzbXP++fj78fDdAADpGCPjGyLlERzgAg/iAAThAxDtKTDxa23zaW/yXmXvREzoEBz6zc75nJ7xQkbuenv2qKb96+v1Z2b6tLXpLTTxGh72i4381tP2vb7pAA/yhYXxPUD94eH8xMLXAQ3gW13yMz7uRk4omcfWAAADMmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6SXB0YzR4bXBFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgZXhpZjpEYXRlVGltZU9yaWdpbmFsPSIyMDI1LTA2LTA2VDAwOjU5OjIwKzAwOjAwIiBJcHRjNHhtcEV4dDpEaWdpdGFsU291cmNlRmlsZVR5cGU9Imh0dHA6Ly9jdi5pcHRjLm9yZy9uZXdzY29kZXMvZGlnaXRhbHNvdXJjZXR5cGUvY29tcG9zaXRlV2l0aFRyYWluZWRBbGdvcml0aG1pY01lZGlhIiBJcHRjNHhtcEV4dDpEaWdpdGFsU291cmNlVHlwZT0iaHR0cDovL2N2LmlwdGMub3JnL25ld3Njb2Rlcy9kaWdpdGFsc291cmNldHlwZS9jb21wb3NpdGVXaXRoVHJhaW5lZEFsZ29yaXRobWljTWVkaWEiIHBob3Rvc2hvcDpDcmVkaXQ9IkVkaXRlZCB3aXRoIEdvb2dsZSBBSSIgcGhvdG9zaG9wOkRhdGVDcmVhdGVkPSIyMDI1LTA2LTA2VDAwOjU5OjIwKzAwOjAwIi8+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgPD94cGFja2V0IGVuZD0idyI/PjE7R9cAAANPSURBVDiNTVULWxs3EFxp9/SWDUGGUEKOQNLg4IZA2v//1zqjg37dzz580mj2odlF9vvdznuffcEjZ58PfMulYAlWzCwfDgfZwXw2UUeg1+ytYFOSy9WZL7kYz0nbtVail+iwX4r4Ig7YlJzLDqejCgmAw673eBU/XRW6E8mq4mJ027qKgddMNTvCbAaHdQVFBRlwcJSjtNKKF/WOOOEZUGKlFKdaNQOKjS7NGqPlJlJjhLL9MJ/ApjHHuOF2VhA3kdhtbwZnKZnz4mpQhC84C8cumVdJh8tpg8vFBBZdRTCxiyVvjnnGGMfVxUfa1fWlooIAKmCoC3BAaylqPkj/4+aM9un2c18nJ5Klwx35xFD2oFFcv1/e7e6sD00JiwK8z0Ma6FVDDaH2+w//AT98aSMxQHFuxtc8i8aFWoE7f7g5e/j6bVnOz9YYGrPExbMuuBLek7Q2cYcL5PIngN/XgdIK4/MJ8WmCOnC91gJxj3+t6/H4dVmeBoISqKCJV/DNAxJQ8HfcWI8/Jk5jDGa8X94HDQ6CqxvuCDsty8s6JIRgTlMR4gp9Gk7W5zdcB93y8zoCF1MIfuYLfYknpXTglrvT6fQLsJf9KhZErTXLcfMLASBfN3GbnX9/fB1BNmtp4sRR0SEI81h+PT3h+XQADEVBwpH3AhzJoB0WeuZx8fobfLfHjiQghCzRG+qCIkJTXLIN9/Hq8g6EdQCn+FJ/1AtawXssWInEPV+v6ydE+LD2iOasLM3UnzmYQH2uT9w6xngB4d8jss7oINOpUwZR/4/r6+35svwYQKGAIcw8IECHbobSfL/H9vPa+2i4j2+fR48MMCRjvompQ4GW++Pp7uURuL7+g2rfjA62yAyRL+9C0ddQdF+vYGAB8Or19bJHxkcVAhfUoUs1ozNzRq8dIrcHu06pg1Cro65mg0SIO8TiIhIiDCT4U8GmQaoyXzSy8xh3kD0m1Ewc0FrD9IlHYR91lBkAlhp6BC67N0KJmyn7Qrb+xW/OLqAwmComCpnCdOoylDV1Khw8iBFDISOGGSu8Vtwale6MCuycf/y4TYYFU5jDCEepNtvt2vx0mVvc5FwtHG/l7X378mW/i7J/N7zxg8d88/gvgMe2tt//C1wCOd+2HB5UAAAAAElFTkSuQmCC"
        style={{ height: "26px", width: "26px" }}
        alt=""
      />
    ),
    title: "Campus Rozgar",
    description:
      "Built a placement portal from scratch with seven roles, integrated forms with Formik/Yup, and managed routing, filters, and CRUD via Axios and React Validation.",
    tech: [
      "React",
      "PostgreSQL",
      "Bootstrap",
      "Formik",
      "Yup",
      "PHP",
      "AWS S3",
    ],
  },
  {
    live: "https://valueinnovationlabs.com/enterprise-hrms.php",
    logo: (
      <img src={VILLogo} style={{ height: "36px", width: "36px" }} alt="" />
    ),
    title: "HRMS by Value Innovation Labs",
    description:
      "Designed and implemented a multi-role performance review system using React and PostgreSQL. Managed auth, forms, role-based views, and JWT-based APIs.",
    tech: [
      "NodeJS",
      "React",
      "PostgreSQL",
      "Bootstrap",
      "TypeScript",
      "JWT",
      "ExpressJS",
    ],
  },
  {
    live: "https://recruit.rozgar.com/",
    logo: (
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAMAAAC7faEHAAAAolBMVEXpHCnpHSnoHCjpHCjoHCn////qHCnqHCjoGyjpHSjoHSnqHSnpGyvsGifmHynlISnzbXP++fj78fDdAADpGCPjGyLlERzgAg/iAAThAxDtKTDxa23zaW/yXmXvREzoEBz6zc75nJ7xQkbuenv2qKb96+v1Z2b6tLXpLTTxGh72i4381tP2vb7pAA/yhYXxPUD94eH8xMLXAQ3gW13yMz7uRk4omcfWAAADMmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6SXB0YzR4bXBFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgZXhpZjpEYXRlVGltZU9yaWdpbmFsPSIyMDI1LTA2LTA2VDAwOjU5OjIwKzAwOjAwIiBJcHRjNHhtcEV4dDpEaWdpdGFsU291cmNlRmlsZVR5cGU9Imh0dHA6Ly9jdi5pcHRjLm9yZy9uZXdzY29kZXMvZGlnaXRhbHNvdXJjZXR5cGUvY29tcG9zaXRlV2l0aFRyYWluZWRBbGdvcml0aG1pY01lZGlhIiBJcHRjNHhtcEV4dDpEaWdpdGFsU291cmNlVHlwZT0iaHR0cDovL2N2LmlwdGMub3JnL25ld3Njb2Rlcy9kaWdpdGFsc291cmNldHlwZS9jb21wb3NpdGVXaXRoVHJhaW5lZEFsZ29yaXRobWljTWVkaWEiIHBob3Rvc2hvcDpDcmVkaXQ9IkVkaXRlZCB3aXRoIEdvb2dsZSBBSSIgcGhvdG9zaG9wOkRhdGVDcmVhdGVkPSIyMDI1LTA2LTA2VDAwOjU5OjIwKzAwOjAwIi8+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgPD94cGFja2V0IGVuZD0idyI/PjE7R9cAAANPSURBVDiNTVULWxs3EFxp9/SWDUGGUEKOQNLg4IZA2v//1zqjg37dzz580mj2odlF9vvdznuffcEjZ58PfMulYAlWzCwfDgfZwXw2UUeg1+ytYFOSy9WZL7kYz0nbtVail+iwX4r4Ig7YlJzLDqejCgmAw673eBU/XRW6E8mq4mJ027qKgddMNTvCbAaHdQVFBRlwcJSjtNKKF/WOOOEZUGKlFKdaNQOKjS7NGqPlJlJjhLL9MJ/ApjHHuOF2VhA3kdhtbwZnKZnz4mpQhC84C8cumVdJh8tpg8vFBBZdRTCxiyVvjnnGGMfVxUfa1fWlooIAKmCoC3BAaylqPkj/4+aM9un2c18nJ5Klwx35xFD2oFFcv1/e7e6sD00JiwK8z0Ma6FVDDaH2+w//AT98aSMxQHFuxtc8i8aFWoE7f7g5e/j6bVnOz9YYGrPExbMuuBLek7Q2cYcL5PIngN/XgdIK4/MJ8WmCOnC91gJxj3+t6/H4dVmeBoISqKCJV/DNAxJQ8HfcWI8/Jk5jDGa8X94HDQ6CqxvuCDsty8s6JIRgTlMR4gp9Gk7W5zdcB93y8zoCF1MIfuYLfYknpXTglrvT6fQLsJf9KhZErTXLcfMLASBfN3GbnX9/fB1BNmtp4sRR0SEI81h+PT3h+XQADEVBwpH3AhzJoB0WeuZx8fobfLfHjiQghCzRG+qCIkJTXLIN9/Hq8g6EdQCn+FJ/1AtawXssWInEPV+v6ydE+LD2iOasLM3UnzmYQH2uT9w6xngB4d8jss7oINOpUwZR/4/r6+35svwYQKGAIcw8IECHbobSfL/H9vPa+2i4j2+fR48MMCRjvompQ4GW++Pp7uURuL7+g2rfjA62yAyRL+9C0ddQdF+vYGAB8Or19bJHxkcVAhfUoUs1ozNzRq8dIrcHu06pg1Cro65mg0SIO8TiIhIiDCT4U8GmQaoyXzSy8xh3kD0m1Ewc0FrD9IlHYR91lBkAlhp6BC67N0KJmyn7Qrb+xW/OLqAwmComCpnCdOoylDV1Khw8iBFDISOGGSu8Vtwale6MCuycf/y4TYYFU5jDCEepNtvt2vx0mVvc5FwtHG/l7X378mW/i7J/N7zxg8d88/gvgMe2tt//C1wCOd+2HB5UAAAAAElFTkSuQmCC"
        style={{ height: "26px", width: "26px" }}
        alt=""
      />
    ),
    title: "Recruit Rozgar",
    description:
      "Developed and maintained a recruiter-facing portal to manage job postings, shortlist candidates, and track applications. Integrated APIs for job management, candidate search, and notifications. Built user-friendly interfaces with filtering, pagination, and role-based views.",
    tech: [
      "React",
      "MongoDB",
      "ExpressJS",
      "Bootstrap",
      "Redis",
      "TypeScript",
      "AWS S3",
    ],
  },
  {
    logo: (
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAMAAAC7faEHAAAAolBMVEXpHCnpHSnoHCjpHCjoHCn////qHCnqHCjoGyjpHSjoHSnqHSnpGyvsGifmHynlISnzbXP++fj78fDdAADpGCPjGyLlERzgAg/iAAThAxDtKTDxa23zaW/yXmXvREzoEBz6zc75nJ7xQkbuenv2qKb96+v1Z2b6tLXpLTTxGh72i4381tP2vb7pAA/yhYXxPUD94eH8xMLXAQ3gW13yMz7uRk4omcfWAAADMmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6SXB0YzR4bXBFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgZXhpZjpEYXRlVGltZU9yaWdpbmFsPSIyMDI1LTA2LTA2VDAwOjU5OjIwKzAwOjAwIiBJcHRjNHhtcEV4dDpEaWdpdGFsU291cmNlRmlsZVR5cGU9Imh0dHA6Ly9jdi5pcHRjLm9yZy9uZXdzY29kZXMvZGlnaXRhbHNvdXJjZXR5cGUvY29tcG9zaXRlV2l0aFRyYWluZWRBbGdvcml0aG1pY01lZGlhIiBJcHRjNHhtcEV4dDpEaWdpdGFsU291cmNlVHlwZT0iaHR0cDovL2N2LmlwdGMub3JnL25ld3Njb2Rlcy9kaWdpdGFsc291cmNldHlwZS9jb21wb3NpdGVXaXRoVHJhaW5lZEFsZ29yaXRobWljTWVkaWEiIHBob3Rvc2hvcDpDcmVkaXQ9IkVkaXRlZCB3aXRoIEdvb2dsZSBBSSIgcGhvdG9zaG9wOkRhdGVDcmVhdGVkPSIyMDI1LTA2LTA2VDAwOjU5OjIwKzAwOjAwIi8+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgPD94cGFja2V0IGVuZD0idyI/PjE7R9cAAANPSURBVDiNTVULWxs3EFxp9/SWDUGGUEKOQNLg4IZA2v//1zqjg37dzz580mj2odlF9vvdznuffcEjZ58PfMulYAlWzCwfDgfZwXw2UUeg1+ytYFOSy9WZL7kYz0nbtVail+iwX4r4Ig7YlJzLDqejCgmAw673eBU/XRW6E8mq4mJ027qKgddMNTvCbAaHdQVFBRlwcJSjtNKKF/WOOOEZUGKlFKdaNQOKjS7NGqPlJlJjhLL9MJ/ApjHHuOF2VhA3kdhtbwZnKZnz4mpQhC84C8cumVdJh8tpg8vFBBZdRTCxiyVvjnnGGMfVxUfa1fWlooIAKmCoC3BAaylqPkj/4+aM9un2c18nJ5Klwx35xFD2oFFcv1/e7e6sD00JiwK8z0Ma6FVDDaH2+w//AT98aSMxQHFuxtc8i8aFWoE7f7g5e/j6bVnOz9YYGrPExbMuuBLek7Q2cYcL5PIngN/XgdIK4/MJ8WmCOnC91gJxj3+t6/H4dVmeBoISqKCJV/DNAxJQ8HfcWI8/Jk5jDGa8X94HDQ6CqxvuCDsty8s6JIRgTlMR4gp9Gk7W5zdcB93y8zoCF1MIfuYLfYknpXTglrvT6fQLsJf9KhZErTXLcfMLASBfN3GbnX9/fB1BNmtp4sRR0SEI81h+PT3h+XQADEVBwpH3AhzJoB0WeuZx8fobfLfHjiQghCzRG+qCIkJTXLIN9/Hq8g6EdQCn+FJ/1AtawXssWInEPV+v6ydE+LD2iOasLM3UnzmYQH2uT9w6xngB4d8jss7oINOpUwZR/4/r6+35svwYQKGAIcw8IECHbobSfL/H9vPa+2i4j2+fR48MMCRjvompQ4GW++Pp7uURuL7+g2rfjA62yAyRL+9C0ddQdF+vYGAB8Or19bJHxkcVAhfUoUs1ozNzRq8dIrcHu06pg1Cro65mg0SIO8TiIhIiDCT4U8GmQaoyXzSy8xh3kD0m1Ewc0FrD9IlHYR91lBkAlhp6BC67N0KJmyn7Qrb+xW/OLqAwmComCpnCdOoylDV1Khw8iBFDISOGGSu8Vtwale6MCuycf/y4TYYFU5jDCEepNtvt2vx0mVvc5FwtHG/l7X378mW/i7J/N7zxg8d88/gvgMe2tt//C1wCOd+2HB5UAAAAAElFTkSuQmCC"
        style={{ height: "26px", width: "26px" }}
        alt=""
      />
    ),
    title: "EPMS for Baroda Gujarat Gramin Bank",
    description:
      "Developed a leave and payroll management system using NodeJS and React. Built payroll logic, handled PostgreSQL data structures, and integrated with Bootstrap UI.",
    tech: [
      "NodeJS",
      "React",
      "PostgreSQL",
      "Bootstrap",
      "TypeScript",
      "ExpressJS",
    ],
  },
];
