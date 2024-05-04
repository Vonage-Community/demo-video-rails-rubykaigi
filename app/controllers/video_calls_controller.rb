class VideoCallsController < ApplicationController
  def new
    @video_call = VideoCall.new
  end

  def create
    @video_call = VideoCall.new(
      application_id: ENV['VONAGE_APPLICATION_ID'],
      uuid: SecureRandom.uuid,
      **video_call_param
    )

    begin
      vonage_video_session = Vonage.video.create_session
      @video_call.session_id = vonage_video_session.session_id

      if @video_call.save
        redirect_to @video_call
      else
        render :new, status: :unprocessable_entity
      end
    rescue => error
      logger.info(error)
      render :new, status: :unprocessable_entity
    end
  end

  def show
  end

  def join
  end

  def invite
  end

  private

  def video_call_params
    params.require(:video_call).permit(:name)
  end
end
