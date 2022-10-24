import {withSession} from "../cli/adapters/session";

export default function Home(props) {
  return (
    <>
      <p>Teste</p>
        <p>
            <pre style={{color: "#fff"}}>
                {props.session}
            </pre>
        </p>
    </>
  )
}

export const getServerSideProps = withSession((ctx) => {
    return {
        props: {
            session: ctx.req.session
        }
    }
})