import type { ExperienceItem } from "../interface";

type Props = {
    data: ExperienceItem;
};

export default function ExperienceItem(props: Props) {
    const { data } = props;
    const { title, company, period, description } = data;

    return (
        <div>
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#FFBB24] rounded-full"></div>
                <div className="text-[16px] leading-[21.6px] text-[#595959] font-medium"> {period} </div>
            </div>

            <div className="flex gap-3 mt-1 items-center">
                <div className="text-[20px] leading-[22px] text-[#111111] font-medium">
                    {company}
                </div>
                <div className="text-[16px] font-medium leading-[21.6px]">
                    {title}
                </div>
            </div>

            <div className="flex flex-col gap-2 mt-5">
                {
                    description.map((item, index) => (
                        <div key={index} className="text-[16px] leading-[21.6px] text-[#222222]">
                            {item}
                        </div>
                    ))
                }
            </div>

        </div>
    );
}