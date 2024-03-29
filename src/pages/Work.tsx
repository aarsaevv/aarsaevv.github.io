import {motion} from "framer-motion"
import {BLINKING_OPACITY, BLINKING_OPACITY_DURATION} from "../constants"
import "../styles/pages/Work.sass"
import {WorksProps} from "../types"

function Work() {
    const works: WorksProps[] = [
        {
            title: "***VIJU***",
            description: "Online cinema",
            stack: "Vue 3, Nuxt 3",
            hostingLink: "https://viju.ru"
        },
        {
            title: "Kemel Toqaev",
            description: "The Kemel Tokayev Foundation biographic site about Kazakhstan President's Kasym-Zhomart Tokaev father, writer Kemel Toqaev and admin panel",
            stack: "Javascript, PHP",
            hostingLink: "https://toqaev.org/"
        },
        {
            title: "Baribar x Naturella",
            description: "Test for Baribar x Naturella x WWF promo company",
            stack: "Javascript, i18n",
            hostingLink: "https://naturella.baribar.kz/"
        },
        {
            title: "Syntax.kz",
            description: "Kazakh literature reader & landing page of the project",
            stack: "Javascript, PHP",
            hostingLink: "https://syntax.kz"
        },
        {
            title: "Imstalcon",
            description: "Website for big steel holding",
            stack: "Wordpress, PHP, Vanilla JS",
            hostingLink: "https://imstalcon.kz/"
        },
        {
            title: "Yappe Delivery",
            description: "Website for delivery service",
            stack: "Vue 3",
            hostingLink: "https://yappe.ru/"
        },
        {
            title: "Vostok",
            description: "Website and Mobile app for Android - software for telecommunication equipment installers",
            stack: "website - Laravel, mobile app - React Native, Saga",
            hostingLink: "https://vostok.puzzle.kz/"
        },
        {
            title: "Basel Insurance",
            description: "Insurance company website all-in-one: for clients, insurance agents, official partners and call center.",
            stack: "Vue 2, Nuxt 2, Laravel, SQL",
            hostingLink: "https://basel.kz",
        },
        {
            title: "Personal blog",
            description:
                "This site you are currently on was made specifically for practicing React skills. It is very simple, but was made right after the transition from Vue. Not everything went smoothly, unfortunately, there were some difficulties with a personal blog, which will appear a little later. This site is hosted on Github Pages. There is also an interesting story with this - I had to quickly create a 404 page due to the lack of SPA support. In general, the stack is, if possible, TypeScript, pure React, Sass. It was made in the shortest possible time - in 4 days, along with the design and some functionality. I hope you will enjoy.",
            stack: "React",
            hostingLink: "https://aarsaevv.github.io/",
            repoLink: "https://github.com/aarsaevv/aarsaevv.github.io",
        },
        {
            title: "YAM YAM",
            description:
                "This project is the implementation of one idea - an attempt to present our vision of how a modern online store can be designed. This is an Asian food delivery app. Written in Vue.js 3, Vue Router, HTML, CSS BEM, hosted by Firebase Firestore DB. At the moment, the layout is responsive for desktop and mobile versions. All dishes are loaded realtime from the database. Adding to the cart is done by interacting with local storage. A classic routed SPA that combines a minimalistic and eye-pleasing design with impressive performance compared to the competition.",
            stack: "Vue 2",
            hostingLink: "https://yamyam-f7b3c.web.app/",
            repoLink: "https://github.com/aarsaevv/yamyam",
        },
    ]
    return (
        <motion.div
            id="work"
            className="work"
            initial={{opacity: 0}}
            animate={{
                opacity: BLINKING_OPACITY,
            }}
            exit={{
                opacity: 0,
            }}
            transition={{duration: BLINKING_OPACITY_DURATION}}>
            <div className="work__header">/Works</div>
            <div className="work__list list">
                {works.map((el: WorksProps, index: number) => {
                    return (
                        <div className="list__element element" key={index}>
                            <div className="element__title">{el.title}</div>
                            <div className="element__description description">{el.description}</div>
                            {el.stack &&
                                <p className="description__stack">
                                    Stack: {el.stack}
                                </p>
                            }
                            <div className="element__links links" >
                                <a
                                    href={el.hostingLink}
                                    className="links__work"
                                    target="_blank"
                                    rel="noreferrer">
                                    {el.hostingLink}
                                </a>
                                <a
                                    href={el.repoLink}
                                    className="links__work"
                                    target="_blank"
                                    rel="noreferrer">
                                    {el.repoLink}
                                </a>
                            </div>
                        </div>
                    )
                })}
                <div className="list__element element">
                    <div className="element__title">To-do List</div>
                    <div className="element__description feature-list">
                        This to-do list is one of the tests I received. <br/>
                        Stack: HTML, CSS (Less), JavaScript, React, Firestore. <br/>
                        Implemented functionality:
                        <ul>
                            <li className="feature-list__item">adding tasks (title and description)</li>
                            <li className="feature-list__item">indication of the due date</li>
                            <li className="feature-list__item">attaching pictures</li>
                            <li className="feature-list__item">editing tasks</li>
                            <li className="feature-list__item">deleting tasks</li>
                            <li className="feature-list__item">marking the completion of the task</li>
                            <li className="feature-list__item">
                                checking if the selected date is relevant at the time the task was created.
                            </li>
                        </ul>
                        All of this works with an existing database (previously added tasks are loaded from Firestore,
                        their
                        contents and state are saved there) and hosted on Firebase.
                    </div>
                    <div className="element__links">
                        <a
                            className="links__work"
                            href="https://react-todolist-bc761.web.app/"
                            target="_blank"
                            rel="noreferrer">
                            https://react-todolist-bc761.web.app/
                        </a>
                        <a
                            className="links__work"
                            href="https://github.com/aarsaevv/react-todolist"
                            target="_blank"
                            rel="noreferrer">
                            https://github.com/aarsaevv/react-todolist
                        </a>
                    </div>
                </div>
                <div className="list__element element">
                    <div className="element__title">Sultan - cosmetics store.</div>
                    <div className="element__description feature-list">
                        This github repos search is one of the Hotels.ru trainee tasks I received. <br/>
                        Stack: HTML, CSS (SCSS), React - FC + hooks, TypeScript, Github Pages. <br/>
                        Implemented functionality: <br/>
                        <ul>
                            <li>a lot of</li>
                        </ul>
                        Hosted on Github Pages.
                    </div>
                    <div className="element__links">
                        <a
                            className="links__work"
                            href="https://aarsaevv.github.io/hotelsru-sultan/"
                            target="_blank"
                            rel="noreferrer">
                            https://aarsaevv.github.io/hotelsru-sultan/
                        </a>
                        <a
                            className="links__work"
                            href="https://github.com/aarsaevv/hotelsru-sultan/"
                            target="_blank"
                            rel="noreferrer">
                            https://github.com/aarsaevv/hotelsru-sultan/
                        </a>
                    </div>
                </div>
                <div className="list__element element">
                    <div className="element__title">Gearch. - Github repos search.</div>
                    <div className="element__description feature-list">
                        This github repos search is one of the Hotels.ru trainee tasks I received. <br/>
                        Stack: HTML, CSS (SCSS), JavaScript (Vanilla), Github Pages, Webpack. <br/>
                        Implemented functionality:
                        <ul>
                            <li className="feature-list__item">searching in github repos</li>
                            <li className="feature-list__item">form validation (symbols amount and empty form
                                checking)
                            </li>
                            <li className="feature-list__item">repos names is a link itself</li>
                            <li className="feature-list__item">additional information about repo</li>
                            <li className="feature-list__item">all of this designed on Vanilla JS ES6</li>
                        </ul>
                        All of this works with a Github API and hosted on Github Pages.
                    </div>
                    <div className="element__links">
                        <a
                            className="links__work"
                            href="https://aarsaevv.github.io/hotelsru-github-search/"
                            target="_blank"
                            rel="noreferrer">
                            https://aarsaevv.github.io/hotelsru-github-search/
                        </a>
                        <a
                            className="links__work"
                            href="https://github.com/aarsaevv/hotelsru-github-search/"
                            target="_blank"
                            rel="noreferrer">
                            https://github.com/aarsaevv/hotelsru-github-search/
                        </a>
                    </div>
                </div>
                <div className="list__element element">
                    <div className="element__title">Just Comments</div>
                    <div className="element__description feature-list">
                        This github repos search is one of the Hotels.ru trainee tasks I received. <br/>
                        Stack: HTML, CSS (SCSS), JavaScript (Vanilla), Github Pages, Webpack. <br/>
                        Implemented functionality:
                        <ul>
                            <li className="feature-list__item">actions with comments - submit, like, delete.</li>
                            <li className="feature-list__item">form validation (symbols amount and empty form
                                checking)
                            </li>
                            <li className="feature-list__item">all data incomes from localStorage</li>
                            <li className="feature-list__item">actions change the localStorage as well.</li>
                        </ul>
                        Hosted on Github Pages.
                    </div>
                    <div className="element__links">
                        <a
                            className="links__work"
                            href="https://aarsaevv.github.io/hotelsru-comments/"
                            target="_blank"
                            rel="noreferrer">
                            https://aarsaevv.github.io/hotelsru-comments/
                        </a>
                        <a
                            className="links__work"
                            href="https://github.com/aarsaevv/hotelsru-comments/"
                            target="_blank"
                            rel="noreferrer">
                            https://github.com/aarsaevv/hotelsru-comments/
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Work
