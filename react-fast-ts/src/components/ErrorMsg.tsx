
interface IErrorMsgProps {
  errorText: string
}

export default function ErrorMsx({errorText}: IErrorMsgProps): JSX.Element {
  return <h2 className='mb-2 text-red-600'>{errorText}</h2>
}