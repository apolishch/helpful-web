class CurrentUserSerializer < BaseSerializer
  attributes :account_id

  def account_id
    #this probably needs to be genericized. This works at present due to the fact that user_controller will always new up a user.
    object.primary_owned_account.id
  end
end
