import { MarketingProjectItem } from '@/features/common/interface';
import { cn } from '@/lib/utils';
import ProjectCard from './ProjectCard';
import { Icon } from '@/components/base/icon/Icon';
import { Assets } from '@/assets';

type Props = {
    theme: {
        background: string;
        btn: string;
    };
    data: MarketingProjectItem[];
};

function WorkSection(props: Props) {
    const { theme, data } = props;
    return (
        <section className={cn(theme.background)}>
            <div className="max-w-screen-xxl mx-auto px-24 pb-24 pt-8 max-lg:px-5">

                <div className='text-[60px] font-semibold leading-[72px] tracking-[-0.01em] text-center max-w-[624px] mx-auto py-24'>
                    Selected works from 2020 to the present
                </div>
                <div className='gap-20 flex flex-col'>
                    {data.map((item, index) => {
                        return <ProjectCard key={index} item={item} theme={{
                            container: 'bg-white'
                        }} />;
                    })}
                </div>
                <button
                    className={cn(
                        'text-[18px] my-10 px-7 py-4 rounded-[8px] leading-[23.4px] font-medium text-start flex items-center gap-2',
                        theme.btn
                    )}
                >
                    Start a project
                    <Icon
                        url={Assets.arrowTopRightIcon.src}
                        size={24}
                    />
                </button>
            </div>
        </section>
    );
}

export default WorkSection;
