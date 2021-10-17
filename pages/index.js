import styles from '../styles/Home.module.css'
import dbConnect from '../utils/db'
import Changarro from '../models/Changarros'

export default function Home({Changarros}) {
  return (
    <>
     { Changarros.map(Changarro => (
      <div className={styles.Changarro} key={Changarro._id}>
        <h1>{Changarro.nombre}</h1>
         <img src={Changarro.img_url} />
        <p>{Changarro.contenido}</p>
      </div>
     ))}
    </>
  )}

export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Changarro.find({})
  const Changarros = result.map((doc) => {
    const Changarro = doc.toObject()
    Changarro._id = Changarro._id.toString()
    return Changarro
  })

  return { props: { Changarros } }
}