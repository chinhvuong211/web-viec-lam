import type { EducationItem } from "../interface";

type Props = {
    data: EducationItem;
};

export default function EducationItem(props: Props) {
    const { data } = props;
    const { time, name, major } = data;

    return (
        <div>
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#FFBB24] rounded-full"></div>
                <div className="text-[16px] leading-[21.6px] text-[#595959] font-medium"> {time} </div>
            </div>

            <div className="text-[20px] leading-[22px] text-[#111111] font-medium mt-4">
                {name}
            </div>

            <div className="text-[14px] leading-[18.2px] text-[#545151] mt-2">
                {major}
            </div>
        </div>
    );
}