import * as React from "react"
import { Link } from "gatsby"

type LayoutProps = React.PropsWithChildren<{
  location: {
    pathname: string
  }
  title: string
  children: any
}>

export const Layout = ({ location, title, children }: LayoutProps) => {
  const rootPath = "/"
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {isRootPath ? (
          <h1 className="main-heading">
            <Link to="/">{title}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}
