import { Button } from '@/components/ui/button'

export function App() {
  return (
    <>
      <Button>Normal</Button>
      <Button as={'a'}>As a link</Button>
    </>
  )
}
