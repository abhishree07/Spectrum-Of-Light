import Alert from '../../components/Alert/'
import ProgressBar from '../../components/ProgressBar'
import styles from './PredictionResult.module.css'

function PredictionResult({ prediction }) {
  const precision = (prediction.probability * 100).toFixed(2)

  return prediction.probability > 0.6 ? (
    <article className={styles.predictions}>
      <h2 className={styles.heading}>
        {prediction.className.replace(/(_)/gi, ' ')}
      </h2>
      <h5>Probability</h5>
      <ProgressBar min="0" max="100" value={precision}>
        {precision.replace('.', ',')} %
      </ProgressBar>
    </article>
  ) : (
    <Alert type="warning">
      Fail to identity, try again with a different image.
    </Alert>
  )
}

export default PredictionResult
