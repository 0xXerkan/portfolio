import { styles } from '../styles'
import { ios, googleplay, jobFinderiosqr, jobFinderAndroidqr, jfmain } from '../assets'

const JobFinderDemo = () => {
  return (
    <div className='sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto'>
      <div>
        <p className={styles.sectionSubText}>React Native - Job Finder App</p>
        <h2 className={styles.sectionHeadText}>Live Demo</h2>

        <div className='w-full sm:w-[600px]'>
          <img src={jfmain} alt='App Preview' />
        </div>

        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          To demo the app on your phone, please download and install Expo Go from the Apple App Store or Google Play Store
        </p>

        <div className='flex flex-wrap gap-10 mt-5'>
          <a href="https://itunes.apple.com/app/apple-store/id982107779">
            <img src={ios} alt="Apple App Store" className='w-[200px]' />
          </a>
          <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www">
            <img src={googleplay} alt="Google Play Store" className='border rounded-lg w-[200px]'/>
          </a>
        </div>

        <p className='mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Once Expo Go has been installed, tap or scan the respective QR code to launch the demo of the app:
        </p>

        <div className='flex flex-wrap gap-10 mt-5'>
          <div className='flex flex-col items-center'>
            <p className='text-[20px]'>iOS</p>
            <a href="exp://u.expo.dev/update/84f682ac-c734-4b3c-8bd5-965444941101" className='mt-2 underline'>
              <img src={jobFinderiosqr} alt="iOS QR Code" className='w-[250px]' />
            </a>

          </div>

          <div className='flex flex-col items-center'>
            <p className='text-[20px]'>Android</p>
            <a href="exp://u.expo.dev/update/c7ff7180-7ba3-4dd3-aa7c-ccb242e15a24" className='mt-2 underline'>
              <img src={jobFinderAndroidqr} alt="Android QR Code" className='w-[250px]' />
            </a>

          </div>
        </div>


      </div>
    </div>
  )
}

export default JobFinderDemo