import { Assets } from '@/assets';
import { Icon } from '@/components/base/icon/Icon';
import Image from '@/components/base/Image';
import { ProjectItem } from '@/features/work/interface';
import { cn } from '@/lib/utils';

type Props = {
    projectDetail: ProjectItem;
    theme?: {
        role?: string;
    }
};
export default function MarketingWorkDetail({ projectDetail, theme }: Props) {
    const {
        name,
        imageUrl,
        client,
        startTime,
        field,
        title,
        projectImages,
        role,
        done,
        result,
        stats,
        brief,
        
    } = projectDetail;

    const leftContent = [
        {
            title: 'Client',
            content: client,
        },
        {
            title: 'Start Time',
            content: startTime,
        },
        {
            title: 'Field',
            content: field,
        },
    ];

 

    return (
        <div className="pt-[12.5rem] mx-auto max-w-screen-xxl max-lg:mt-[4.6875rem] bg-inherit">
            <div className="px-24 pb-24 max-lg:px-4 max-lg:pb-10">
                <div
                    className={cn(
                        'text-[1rem] leading-[1.4rem] px-6 py-2 rounded-[2rem] mx-auto w-fit',
                        'max-lg:text-[0.875rem] max-lg:leading-[1.125rem] max-lg:px-5',
                        'text-[#272626]',
                        theme?.role || 'bg-[#F1F1F1] text-[#272626]'
                    )}
                >
                    {role}
                </div>
                <div
                    className={cn(
                        'text-[3.75rem] font-semibold leading-[4.4rem] tracking-[-0.01em] text-center mt-[1.75rem] text-[#272626]',
                        'max-lg:text-[2.5rem] max-lg:leading-[3.5rem] max-lg:mt-3'
                    )}
                >
                    {projectDetail.name}
                </div>
                <div
                    className={cn(
                        'text-[1.125rem] leading-[1.51875rem] text-[#9B9B9B] mt-4 w-[47.5rem] mx-auto text-center',
                        'max-lg:w-full max-lg:text-[0.875rem] max-lg:leading-[1.125rem] max-lg:mt-3'
                    )}
                >
                    {title}
                </div>

                {/* Image */}
                <div className="mx-auto mt-10 max-lg:mt-8">
                    <Image
                        src={imageUrl ?? ''}
                        alt={name ?? ''}
                        width={1248}
                        height={702}
                        className="object-cover rounded-[1.5rem] w-full"
                    />
                </div>

                <div
                    className={cn('mt-16 flex gap-48', 'max-lg:flex-col max-lg:gap-10 max-lg:mt-6')}
                >
                    <div className="flex flex-col gap-5 w-[19.6875rem] max-lg:w-full max-lg:pr-10">
                        {leftContent.map((item) => (
                            <div
                                className="flex flex-col gap-2 border-b border-[#E0E0E0] pb-5"
                                key={item.title}
                            >
                                <div
                                    className={cn(
                                        'text-[1.125rem] leading-[1.51875rem] text-[#595959]',
                                        'max-lg:text-[0.875rem] max-lg:leading-[1.125rem]'
                                    )}
                                >
                                    {item.title}
                                </div>
                                <div
                                    className={cn(
                                        'text-[2rem] font-semibold leading-[2.6rem] text-[#000000] mt-2',
                                        'max-lg:text-[1.25rem] max-lg:leading-[1.625rem]'
                                    )}
                                >
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        className={cn(
                            'flex flex-col items-start justify-start flex-1 gap-8',
                            'max-lg:gap-8'
                        )}
                    >
                        <div>
                            <div
                                className={cn(
                                    'text-[2rem] font-semibold leading-[2.5rem] tracking-[0.02em] text-[#272626]',
                                    'max-lg:text-[1.5rem] max-lg:leading-[1.875rem]'
                                )}
                            >
                                Request/Brief
                            </div>
                            <div
                                className={cn(
                                    'text-[1rem] leading-[1.4rem] text-[#595959] mt-4 max-lg:mt-3',
                                    'max-lg:text-[0.875rem] max-lg:leading-[1.125rem]'
                                )}
                            >
                                {brief}
                            </div>
                        </div>
                        <div>
                            <div
                                className={cn(
                                    'text-[2rem] font-semibold leading-[2.5rem] tracking-[0.02em] text-[#272626]',
                                    'max-lg:text-[1.5rem] max-lg:leading-[1.875rem]'
                                )}
                            >
                                What was done?
                            </div>
                            <div className="mt-4 max-lg:mt-3">
                                {done?.map((item, index) => (
                                    <div
                                        className={cn(
                                            'text-[1rem] leading-[1.4rem] text-[#595959] mt-2',
                                            'max-lg:text-[0.875rem] max-lg:leading-[1.125rem]'
                                        )}
                                        key={index}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div
                                className={cn(
                                    'text-[2rem] font-semibold leading-[2.5rem] tracking-[0.02em] text-[#272626]',
                                    'max-lg:text-[1.5rem] max-lg:leading-[1.875rem]'
                                )}
                            >
                                Result
                            </div>
                            <div className="mt-4 max-lg:mt-3">{result}</div>
                        </div>
                        <div
                            className={cn(
                                'grid grid-cols-3 justify-between w-full gap-y-14 gap-x-10',
                                'max-lg:grid-cols-2 max-lg:gap-y-5 max-lg:gap-x-8 max-lg:mb-5'
                            )}
                        >
                            {stats?.map((item, index) => (
                                <div key={index}>
                                    <div
                                        className={cn(
                                            'text-[1rem] leading-6 text-[#595959]',
                                            'max-lg:text-[0.875rem] max-lg:leading-[1.125rem]'
                                        )}
                                    >
                                        {item.title}
                                    </div>
                                    <div className="flex items-end mt-1">
                                        <div
                                            className={cn(
                                                'text-[3.5rem] font-semibold leading-[2.875rem] text-[#000000] mt-2 mr-2',
                                                'max-lg:text-[2rem] max-lg:leading-[1.625rem]'
                                            )}
                                        >
                                            {item.value}
                                        </div>
                                        <Icon
                                            url={Assets.arrowTopIcon.src}
                                            className="h-5 w-5"
                                            size={18}
                                        />
                                        <div
                                            className={cn(
                                                'text-[1.125rem] font-medium leading-[1.125rem] text-[#000000] mt-2',
                                                'max-lg:text-[1rem] max-lg:leading-[1.125rem]'
                                            )}
                                        >
                                            {item.percentage}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className={cn(
                        'flex items-center gap-8 mt-16',
                        'max-lg:flex-col max-lg:gap-5 max-lg:mt-6'
                    )}
                >
                    {projectImages?.map((item, index) => (
                        <Image
                            src={item ?? ''}
                            alt={name ?? ''}
                            width={1248}
                            height={702}
                            className="object-cover rounded-[1.5rem] w-full"
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
