import { Assets } from '@/assets';
import { Icon } from '@/components/base/icon/Icon';
import Image from '@/components/base/Image';
import { ProjectItem } from '@/features/work/interface';
import { cn } from '@/lib/utils';
export default function MarketingWorkDetail({ projectDetail }: { projectDetail: ProjectItem }) {
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
        <div className="mt-[200px] mx-auto max-w-screen-xxl max-lg:mt-[75px]">
            <div className="px-24 pb-24 max-lg:px-4 max-lg:pb-10">
                <div
                    className={cn(
                        'text-[16px] leading-[22.4px] bg-[#F1F1F1] px-6 py-2 rounded-[32px] mx-auto w-fit',
                        'max-lg:text-[14px] max-lg:leading-[18px] max-lg:px-5',
                        'text-[#272626]'
                    )}
                >
                    {role}
                </div>
                <div
                    className={cn(
                        'text-6xl font-semibold leading-[70.4px] tracking-[-0.01em] text-center mt-[28px] text-[#272626]',
                        'max-lg:text-[2.5rem] max-lg:leading-[3.5rem] max-lg:mt-3'
                    )}
                >
                    {projectDetail.name}
                </div>
                <div
                    className={cn(
                        'text-[18px] leading-[24.3px] text-[#9B9B9B] mt-4 w-[760px] mx-auto text-center',
                        'max-lg:w-full max-lg:text-[14px] max-lg:leading-[18px] max-lg:mt-3'
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
                        className="object-cover rounded-[24px] w-full"
                    />
                </div>

                <div
                    className={cn('mt-16 flex gap-48', 'max-lg:flex-col max-lg:gap-10 max-lg:mt-6')}
                >
                    <div className="flex flex-col gap-5 w-[315px] max-lg:w-full max-lg:pr-10">
                        {leftContent.map((item) => (
                            <div
                                className="flex flex-col gap-2 border-b border-[#E0E0E0] pb-5"
                                key={item.title}
                            >
                                <div
                                    className={cn(
                                        'text-[18px] leading-[24.3px] text-[#595959]',
                                        'max-lg:text-[14px] max-lg:leading-[18px]'
                                    )}
                                >
                                    {item.title}
                                </div>
                                <div
                                    className={cn(
                                        'text-[32px] font-semibold leading-[41.6px] text-[#000000] mt-2',
                                        'max-lg:text-[20px] max-lg:leading-[26px]'
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
                                    'text-[32px] font-semibold leading-[40px] tracking-[0.02em] text-[#272626]',
                                    'max-lg:text-[24px] max-lg:leading-[30px]'
                                )}
                            >
                                Request/Brief
                            </div>
                            <div
                                className={cn(
                                    'text-[16px] leading-[22.4px] text-[#595959] mt-4 max-lg:mt-3',
                                    'max-lg:text-[14px] max-lg:leading-[18px]'
                                )}
                            >
                                {brief}
                            </div>
                        </div>
                        <div>
                            <div
                                className={cn(
                                    'text-[32px] font-semibold leading-[40px] tracking-[0.02em] text-[#272626]',
                                    'max-lg:text-[24px] max-lg:leading-[30px]'
                                )}
                            >
                                What was done?
                            </div>
                            <div className="mt-4 max-lg:mt-3">
                                {done?.map((item, index) => (
                                    <div
                                        className={cn(
                                            'text-[16px] leading-[22.4px] text-[#595959] mt-2',
                                            'max-lg:text-[14px] max-lg:leading-[18px]'
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
                                    'text-[32px] font-semibold leading-[40px] tracking-[0.02em] text-[#272626]',
                                    'max-lg:text-[24px] max-lg:leading-[30px]'
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
                                            'text-[16px] leading-6 text-[#595959]',
                                            'max-lg:text-[14px] max-lg:leading-[18px]'
                                        )}
                                    >
                                        {item.title}
                                    </div>
                                    <div className="flex items-end mt-1">
                                        <div
                                            className={cn(
                                                'text-[56px] font-semibold leading-[46px] text-[#000000] mt-2 mr-2',
                                                'max-lg:text-[32px] max-lg:leading-[26px]'
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
                                                'text-[18px] font-medium leading-[18px] text-[#000000] mt-2',
                                                'max-lg:text-[16px] max-lg:leading-[18px]'
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
                            className="object-cover rounded-[24px] w-full"
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
