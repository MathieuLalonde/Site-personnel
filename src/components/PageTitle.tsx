interface Props {
  // siteName?: string;
  children?: string;
  noSiteName?: boolean;
  description?: string;
}

const PageTitle = ({ children = "", noSiteName = false, description = "" }: Props) => {
  let siteName = "Mathieu Lalonde"

  return (
      <>
        {noSiteName ?
          (<title> {children} </title>) :
          (children ?
            (<title> {children} | {siteName} </title>)
            : <title> {siteName} </title>)
        }

        {description ? <meta name="description" content={description} /> : <></>}
      </>
  )
};

export default PageTitle