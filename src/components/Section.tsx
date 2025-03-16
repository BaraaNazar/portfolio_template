import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

type SectionProps = {
  sectionTitle: string;
  description?: string[] | null;
  contents:
    | {
        contentTitle?: string | null;
        date?: string | null;
        description?: string[] | null;
      }[]
    | null;
};

function Section({ sectionTitle, description, contents }: SectionProps) {
  return (
    <Card className='border-none shadow-none p-0 m-0'>
      <CardHeader>
        <CardTitle className='text-xs md:text-md md:text-lg border-b-2 border-black'>
          {sectionTitle}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul
          className={cn(
            `${description && description?.length > 1 && 'list-disc'}`
          )}
        >
          {description?.map((item) => (
            <li>{item}</li>
          ))}
        </ul>

        {contents &&
          contents.map((content) => (
            <Card className='p-0 m-0 border-none shadow-none'>
              <CardHeader className='font-bold'>
                <CardTitle className='text-md md:text-lg'>
                  {content.contentTitle}
                </CardTitle>
                <div className='text-xs px-1'>
                  {content.date && `| ${content.date}`}
                </div>
              </CardHeader>
              <CardContent>
                <ul className={cn(`${contents.length > 1 && 'list-disc'}`)}>
                  {content.description?.map((item) => {
                    return <li className=''>{item}</li>;
                  })}
                </ul>
              </CardContent>
            </Card>
          ))}
      </CardContent>
    </Card>
  );
}

export default Section;
