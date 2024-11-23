import { ProjectItem } from '@/features/work/interface';
import Image from '@/components/base/Image';
import { Icon } from '@/components/base/icon/Icon';
import { Assets } from '@/assets';
export default function MarketingWorkDetail({
    projectDetail,
}: {
    projectDetail: ProjectItem;
}) {

    const { name, imageUrl, service, client, startTime, field, description, title, projectImages, role, done, result, goals, stats, brief } = projectDetail;


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
    ]


    return (
        <div className='mt-[200px] mx-auto max-w-screen-xxl m0'>
            <div className='px-24 pb-24'>
                <div className="text-[16px] leading-[22.4px] bg-[#F1F1F1] px-6 py-2 rounded-[32px] mx-auto w-fit">
                    {role}
                </div>
                <div className="text-6xl font-semibold leading-[70.4px] tracking-[-0.01em] text-center mt-[28px]">
                    {projectDetail.name}
                </div>
                <div className="text-[18px] leading-[24.3px] text-[#9B9B9B] mt-[16px] w-[760px] mx-auto">
                    {title}
                </div>

                {/* Image */}
                <div className="mx-auto mt-[40px]">
                    <Image src={imageUrl ?? ''} alt={name ?? ''} width={1248} height={702} className='object-cover rounded-[24px] w-full' />
                </div>

                <div className="mt-16 flex  gap-48">
                    <div className='flex flex-col gap-5 w-[315px]'>
                        {leftContent.map((item) => (
                            <div className="flex flex-col gap-2 border-b border-[#E0E0E0] pb-5" key={item.title}>
                                <div className="text-[18px] leading-[24.3px] text-[#595959]">
                                    {item.title}
                                </div>
                                <div className="text-[32px] font-semibold leading-[41.6px] text-[#000000] mt-2">
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-col items-start justify-start flex-1 gap-8'>
                        <div>
                            <div className='text-[32px] font-semibold leading-[40px] tracking-[0.02em] text-[#272626]'>
                                Request/Brief
                            </div>
                            <div className='text-[16px] leading-[22.4px] text-[#595959] mt-4'>
                                {brief}
                            </div>
                        </div>
                        <div>
                            <div className='text-[32px] font-semibold leading-[40px] tracking-[0.02em] text-[#272626]'>
                                What was done?
                            </div>
                            <div className='mt-4'>
                                {done?.map((item, index) => (
                                    <div className='text-[16px] leading-[22.4px] text-[#595959] mt-2' key={index}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className='text-[32px] font-semibold leading-[40px] tracking-[0.02em] text-[#272626]'>
                                Result
                            </div>
                            <div className='mt-4'>
                                {result}
                            </div>
                        </div>
                        <div className='grid grid-cols-3 justify-between w-full gap-y-14 gap-x-10'>
                            {
                                stats?.map((item, index) => (
                                    <div key={index}>
                                        <div className='text-[16px] leading-6 text-[#595959]'>
                                            {item.title}
                                        </div>
                                        <div className='flex items-end mt-1'>
                                            <div className='text-[56px] font-semibold leading-[46px] text-[#000000] mt-2 mr-2'>
                                                {item.value}
                                            </div>
                                            <Icon url={Assets.arrowTopIcon.src} className='h-5 w-5' size={18}/>
                                            <div className='text-[18px] font-medium leading-[18px] text-[#000000] mt-2'>
                                                {item.percentage}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>


                <div className='flex items-center gap-8 mt-16'>
                    {
                        projectImages?.map((item, index) => (
                            <Image src={item ?? ''} alt={name ?? ''} width={1248} height={702} className='object-cover rounded-[24px] w-full mt-16' key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
