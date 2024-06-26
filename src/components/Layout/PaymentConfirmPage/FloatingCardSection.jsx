import moment from 'moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FloatingCardSection = ({ name, date, img, quantity, id }) => {
  return (
    <div className="w-[506px] h-[457px] rounded-2xl bg-white shadow-cardShadow sticky top-[100px] px-6 py-5 text-black flex flex-col">
      <h1 className="text-[24px] font-medium">Ringkasan Pesanan</h1>
      <div className="w-full h-[3px] bg-neutral-20 my-6"></div>
      <div className="flex flex-col gap-6">
        {' '}
        <div className="flex w-full gap-4">
          <div className="w-[145px] h-[111px] rounded-lg overflow-hidden">
            <img
              src={img}
              alt=""
              className="object-cover object-center size-full"
            />
          </div>
          <div className="flex flex-col w-[297px]">
            <h1 className="font-semibold">{name}</h1>
            <Link
              to={`/open-trip/${id}`}
              className="font-semibold size-fit text-primary-60 px-[14px] py-2 mt-[47px] self-end"
            >
              Lihat Detail Open Trip
            </Link>
          </div>
        </div>
        <div className="w-full h-[100px] rounded-xl bg-primary-10 p-5 flex flex-col gap-3">
          <div className="flex items-center justify-between w-full">
            <h1 className="font-medium text-neutral-40">Tanggal Kunjungan</h1>
            <h1 className="font-medium text-neutral-60">
              {moment(date).format('DD MMMM YYYY')}
            </h1>
          </div>
          <div className="flex items-center justify-between w-full">
            <h1 className="font-medium text-neutral-40">Jumlah Tamu</h1>
            <h1 className="font-medium text-neutral-60">
              {quantity} pengunjung
            </h1>
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 px-5 rounded-xl">
          <h1 className="text-[14px] font-medium text-primary-100">
            Tidak Bisa Reschedule
          </h1>
          <h1 className="text-[14px] font-medium text-primary-100">
            Tidak Bisa Refund
          </h1>
        </div>
      </div>
    </div>
  );
};

FloatingCardSection.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  img: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.number,
};

export default FloatingCardSection;
