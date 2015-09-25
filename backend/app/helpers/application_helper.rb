module ApplicationHelper
  def ready_to_go?
    Trail.count > 15000
  end
end
