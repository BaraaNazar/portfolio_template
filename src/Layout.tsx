import Header from './components/Header';
import { Card, CardContent } from './components/ui/card';

type LayoutProps = {
  children: React.ReactNode;
  name: string;
  position: string;
};

function Layout({ children, name, position }: LayoutProps) {
  return (
    <>
      <Header name={name} position={position} />
      <Card className='border-none shadow-none'>
        <CardContent>{children}</CardContent>
      </Card>
    </>
  );
}

export default Layout;
