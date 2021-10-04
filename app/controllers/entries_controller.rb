class EntriesController < ApplicationController
    def index
        render json: Entry.all
    end
    def create
        entry = @current_user.entries.create!(entry_parameters)
        render json: entry
    end
    private
    def entry_parameters
        params.permit(:dddd , :ddd , :ddd)
    end
end
